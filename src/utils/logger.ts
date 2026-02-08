type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  service: string;
  [key: string]: unknown;
}

interface Logger {
  info: (message: string, meta?: Record<string, unknown>) => void;
  warn: (message: string, meta?: Record<string, unknown>) => void;
  error: (message: string, meta?: Record<string, unknown>) => void;
  debug: (message: string, meta?: Record<string, unknown>) => void;
}

function formatLogEntry(
  level: LogLevel,
  service: string,
  message: string,
  meta?: Record<string, unknown>
): string {
  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    service,
    ...meta,
  };
  return JSON.stringify(entry);
}

function createLogger(service: string): Logger {
  return {
    info: (message: string, meta?: Record<string, unknown>): void => {
      process.stdout.write(formatLogEntry('info', service, message, meta) + '\n');
    },
    warn: (message: string, meta?: Record<string, unknown>): void => {
      process.stdout.write(formatLogEntry('warn', service, message, meta) + '\n');
    },
    error: (message: string, meta?: Record<string, unknown>): void => {
      process.stderr.write(formatLogEntry('error', service, message, meta) + '\n');
    },
    debug: (message: string, meta?: Record<string, unknown>): void => {
      process.stdout.write(formatLogEntry('debug', service, message, meta) + '\n');
    },
  };
}

export const logger = createLogger('backend-legacy');
