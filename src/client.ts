import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context/context.cjs";
import { getToken } from "./getToken";
import { onError } from "@apollo/client/link/error/error.cjs";
import fetch from 'cross-fetch';
import { Agent } from 'https';
import { Agent as AgentHTTP } from 'http';

export type { NormalizedCacheObject, ApolloClient };

const httpUrl = process.env.BACKEND_HTTPS_URL || process.env.NODE_ENV === "production" ? "https://api.adaptic.ai/graphql" : "http://localhost:4000/graphql";

const httpAgent = new AgentHTTP({ keepAlive: false });
const httpsAgent = new Agent({ keepAlive: false });

const agent = httpUrl.startsWith("https") ? httpsAgent : httpAgent;

/**
 * Function to get the authentication token using the custom getToken implementation
 */
async function getAuthToken(req?: any): Promise<string | null> {
  const secret = process.env.JWT_SECRET as string;
  const salt = process.env.JWT_SALT as string;
  const secureCookie = process.env.NODE_ENV === "production";

  if (secret && salt && req) {
    try {
      const token = await getToken({
        req,
        secureCookie,
        secret,
        salt,
        raw: true,
      });
      return token as string | null;
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
    }
  }
  return null;
}

/**
 * Function to create a new Apollo Client instance
 */
export function createApolloClient(req?: any): ApolloClient<NormalizedCacheObject> {

  const httpLink = new HttpLink({
    uri: httpUrl,
    fetch,
    fetchOptions: {
      agent: agent,
    },
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getAuthToken(req);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        connection: 'close',
      },
    };
  });

  // Error handling link
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  return new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache(),
  });
}

// initialise apollo client

export const client = createApolloClient();
