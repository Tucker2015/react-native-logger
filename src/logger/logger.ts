type LogLevel = 'error' | 'warn' | 'info';

interface LoggerConfig {
  serverUrl?: string;
  appName?: string;
}

const DEFAULT_SERVER_URL = 'https://logger.ktinternet.net/log';
let defaultAppName = '';

/**
 * Set the default app name for all logs (unless overridden per log call)
 */
export function setDefaultAppName(appName: string) {
  defaultAppName = appName;
}

function sendLog(level: LogLevel, message: string, config?: LoggerConfig) {
  const serverUrl = config?.serverUrl || DEFAULT_SERVER_URL;
  const appName = config?.appName || defaultAppName;
  fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ level, message, appName }),
  })
    .then((response) => response.json())
    .then((data) => console.log('Log sent to server:', data))
    .catch((error) => console.error('Error sending log to server:', error));
}

function formatLogArgs(args: any[]): string {
  return args
    .map((arg) => {
      if (typeof arg === 'string') return arg;
      try {
        return JSON.stringify(arg);
      } catch {
        return String(arg);
      }
    })
    .join(' ');
}

export function logError(...args: any[]) {
  let config: LoggerConfig | undefined;
  if (
    args.length &&
    typeof args[args.length - 1] === 'object' &&
    (args[args.length - 1].serverUrl || args[args.length - 1].appName)
  ) {
    config = args.pop();
  }
  sendLog('error', formatLogArgs(args), config);
}

export function logWarning(...args: any[]) {
  let config: LoggerConfig | undefined;
  if (
    args.length &&
    typeof args[args.length - 1] === 'object' &&
    (args[args.length - 1].serverUrl || args[args.length - 1].appName)
  ) {
    config = args.pop();
  }
  sendLog('warn', formatLogArgs(args), config);
}

export function logInfo(...args: any[]) {
  let config: LoggerConfig | undefined;
  if (
    args.length &&
    typeof args[args.length - 1] === 'object' &&
    (args[args.length - 1].serverUrl || args[args.length - 1].appName)
  ) {
    config = args.pop();
  }
  sendLog('info', formatLogArgs(args), config);
}
