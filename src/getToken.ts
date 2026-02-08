import { IncomingHttpHeaders } from 'http';
import { Buffer } from 'buffer';
import * as crypto from 'crypto';
import { jwtSecret } from './config/jwtConfig';
import { logger } from './utils/logger';

/**
 * Default maximum age for JWT (30 days)
 */
const DEFAULT_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds

/**
 * Get current UNIX timestamp in seconds
 */
const now = (): number => Math.floor(Date.now() / 1000);

/**
 * Generate a UUIDv4 string
 */
function generateUUID(): string {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older Node.js versions
  return (1e7 + -1e3 + -4e3 + -8e3 + -1e11).toString().replace(/[018]/g, (c: string) =>
    (
      parseInt(c, 16) ^
      (crypto.randomBytes(1)[0] & (15 >> (parseInt(c, 16) / 4)))
    ).toString(16)
  );
}

/**
 * Base64 URL Encode
 */
function base64UrlEncode(buffer: Buffer): string {
  return buffer.toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

/**
 * Base64 URL Decode
 */
function base64UrlDecode(str: string): Buffer {
  // Pad the string with '=' to make its length a multiple of 4
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) {
    str += '=';
  }
  return Buffer.from(str, 'base64');
}

/**
 * Encrypt a JSON payload into JWE using 'dir' and 'A256GCM'
 */
async function encryptJWT(payload: Record<string, any>, encryptionKey: Buffer): Promise<string> {
  const header = {
    alg: 'dir',
    enc: 'A256GCM'
  };
  const iv = crypto.randomBytes(12); // 96-bit nonce for GCM

  const cipher = crypto.createCipheriv('aes-256-gcm', encryptionKey, iv);
  const plaintext = Buffer.from(JSON.stringify(payload), 'utf8');
  const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const authTag = cipher.getAuthTag();

  const jwe = [
    base64UrlEncode(Buffer.from(JSON.stringify(header), 'utf8')), // Protected Header
    '', // Encrypted Key (empty for 'dir')
    base64UrlEncode(iv), // IV
    base64UrlEncode(ciphertext), // Ciphertext
    base64UrlEncode(authTag) // Authentication Tag
  ].join('.');

  return jwe;
}

/**
 * Decrypt a JWE string into a JSON payload using 'dir' and 'A256GCM'
 */
async function decryptJWT(jwe: string, encryptionKey: Buffer): Promise<Record<string, any>> {
  const parts = jwe.split('.');
  if (parts.length !== 5) {
    throw new Error('Invalid JWE format');
  }

  const [encodedHeader, encryptedKey, encodedIV, encodedCiphertext, encodedAuthTag] = parts;

  if (encryptedKey !== '') {
    throw new Error('Encrypted Key must be empty for "dir" algorithm');
  }

  const header = JSON.parse(base64UrlDecode(encodedHeader).toString('utf8'));
  if (header.alg !== 'dir' || header.enc !== 'A256GCM') {
    throw new Error('Unsupported JWE algorithm or encryption method');
  }

  const iv = base64UrlDecode(encodedIV);
  const ciphertext = base64UrlDecode(encodedCiphertext);
  const authTag = base64UrlDecode(encodedAuthTag);

  const decipher = crypto.createDecipheriv('aes-256-gcm', encryptionKey, iv);
  decipher.setAuthTag(authTag);

  let decrypted: Buffer;
  try {
    decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  } catch (err) {
    throw new Error('Failed to decrypt JWE');
  }

  const payload = JSON.parse(decrypted.toString('utf8'));
  return payload;
}

/**
 * HKDF key derivation using SHA-256
 */
async function getDerivedEncryptionKey(keyMaterial: string | Buffer, salt: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const ikm = typeof keyMaterial === 'string' ? Buffer.from(keyMaterial, 'utf8') : keyMaterial;
    const saltBuffer = Buffer.from(salt, 'utf8');
    const info = Buffer.from(`NextAuth.js Generated Encryption Key${salt ? ` (${salt})` : ''}`, 'utf8');

    crypto.hkdf('sha256', ikm, saltBuffer, info, 32, (err, derivedKey) => {
      if (err || !derivedKey) {
        reject(err || new Error('HKDF failed to derive key'));
      } else {
        resolve(Buffer.from(derivedKey));
      }
    });
  });
}

/**
 * JWT Encode Parameters
 */
interface JWTEncodeParams {
  token?: Record<string, any>;
  secret: string | Buffer;
  maxAge?: number;
  salt?: string;
}

/**
 * Encode a JWT payload into an encrypted JWE string
 */
export async function encode(params: JWTEncodeParams): Promise<string> {
  const { token = {}, secret, maxAge = DEFAULT_MAX_AGE, salt = '' } = params;
  const encryptionSecret = await getDerivedEncryptionKey(secret, salt);
  const payload = {
    ...token,
    iat: now(),
    exp: now() + maxAge,
    jti: generateUUID()
  };
  return await encryptJWT(payload, encryptionSecret);
}

/**
 * JWT Decode Parameters
 */
interface JWTDecodeParams {
  token: string;
  secret: string | Buffer;
  salt?: string;
}

/**
 * Decode a JWE string into a JWT payload
 */
export async function decode(params: JWTDecodeParams): Promise<Record<string, any> | null> {
  const { token, secret, salt = '' } = params;
  if (!token) return null;
  try {
    const encryptionSecret = await getDerivedEncryptionKey(secret, salt);
    const payload = await decryptJWT(token, encryptionSecret);
    return payload;
  } catch (err) {
    return null;
  }
}

/**
 * JWT Options for decoding
 */
interface JWTOptions {
  decode?: typeof decode;
}

/**
 * Logger Interface
 */
interface LoggerInstance {
  info(message: string): void;
  error(message: string): void;
}

/**
 * Default Logger using Console
 */
const defaultLogger: LoggerInstance = {
  info: (message: string) => logger.info(message),
  error: (message: string) => logger.error(message),
};

/**
 * Request Types
 */
type IncomingRequest = {
  cookies?: Record<string, string>;
  headers?: IncomingHttpHeaders;
} | {
  headers: IncomingHttpHeaders;
  cookies?: string;
};

/**
 * GetToken Parameters
 */
interface GetTokenParams<R extends boolean = false> {
  /** The request containing the JWT either in the cookies or in the `Authorization` header. */
  req: IncomingRequest;
  /**
   * Use secure prefix for cookie name, unless URL in `NEXTAUTH_URL` is http://
   * or not set (e.g. development or test instance) case use unprefixed name
   */
  secureCookie?: boolean;
  /** If the JWT is in the cookie, what name `getToken()` should look for. */
  cookieName?: string;
  /**
   * `getToken()` will return the raw JWT if this is set to `true`
   * @default false
   */
  raw?: R;
  /**
   * The same `secret` used in the `NextAuth` configuration.
   * Defaults to the `JWT_SECRET` environment variable.
   */
  secret?: string | Buffer;
  /**
   * The same `salt` used in the `NextAuth` configuration.
   * Defaults to the `JWT_SALT` environment variable.
   */
  salt?: string;
  decode?: JWTOptions["decode"];
  logger?: LoggerInstance;
}

/**
 * SessionStore equivalent to manage cookies
 */
class SessionStore {
  name: string;
  secure: boolean;
  value: string | null;

  constructor(options: { name: string; options: { secure: boolean } }, request: IncomingRequest, logger: LoggerInstance) {
    this.name = options.name;
    this.secure = options.options.secure;
    this.value = this.parseCookie(request.cookies, request.headers);
    logger.info(`SessionStore initialized with cookie name: ${this.name}`);
  }

  private parseCookie(cookies: unknown, headers: IncomingHttpHeaders = {}): string | null {
    // If cookies are provided as an object
    if (typeof cookies === 'object' && cookies !== null && !Array.isArray(cookies)) {
      const cookieObj = cookies as Record<string, string>;
      return cookieObj[this.name] || null;
    }

    // If cookies are provided as a string
    if (typeof cookies === 'string') {
      const parsedCookies: Record<string, string> = {};
      cookies.split(';').forEach(cookie => {
        const [key, ...val] = cookie.trim().split('=');
        parsedCookies[key] = val.join('=');
      });
      return parsedCookies[this.name] || null;
    }

    // Fallback: Try to parse from headers
    if (headers && headers.cookie && typeof headers.cookie === 'string') {
      const parsedCookies: Record<string, string> = {};
      headers.cookie.split(';').forEach(cookie => {
        const [key, ...val] = cookie.trim().split('=');
        parsedCookies[key] = decodeURIComponent(val.join('='));
      });
      return parsedCookies[this.name] || null;
    }

    return null;
  }
}

/**
 * Extract the JWT token from the request
 */
export async function getToken<R extends boolean = false>(
  params: GetTokenParams<R>
): Promise<R extends true ? string : Record<string, any> | null> {
  const {
    req,
    secureCookie = (process.env.NEXTAUTH_URL?.startsWith('https://') ?? false) || !!process.env.VERCEL,
    cookieName = secureCookie ? '__Secure-next-auth.session-token' : 'next-auth.session-token',
    raw = false,
    decode: _decode = decode,
    logger = defaultLogger,
    secret = jwtSecret,
    salt = process.env.JWT_SALT || ''
  } = params;

  if (!req) throw new Error('Must pass `req` to JWT getToken()');

  const sessionStore = new SessionStore(
    { name: cookieName, options: { secure: secureCookie } },
    req,
    logger
  );

  let token = sessionStore.value;

  // Check Authorization header for Bearer token
  const authorizationHeader = req.headers && req.headers['authorization'];
  if (!token && typeof authorizationHeader === 'string' && authorizationHeader.startsWith('Bearer ')) {
    const urlEncodedToken = authorizationHeader.split(' ')[1];
    token = decodeURIComponent(urlEncodedToken);
    logger.info('Token found in Authorization header');
  }

  if (!token) {
    logger.info('No token found in cookies or Authorization header');
    return null as R extends true ? string : Record<string, any> | null;
  }

  if (raw) {
    logger.info('Returning raw token');
    return token as R extends true ? string : Record<string, any> | null;
  }

  try {
    const decoded = await _decode({ token, secret, salt });
    logger.info('Token successfully decoded');
    return decoded as R extends true ? string : Record<string, any> | null;
  } catch (err) {
    logger.error('Failed to decode token');
    return null as R extends true ? string : Record<string, any> | null;
  }
}

