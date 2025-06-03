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

export function logError(message: string, config?: LoggerConfig) {
  sendLog('error', message, config);
}

export function logWarning(message: string, config?: LoggerConfig) {
  sendLog('warn', message, config);
}

export function logInfo(message: string, config?: LoggerConfig) {
  sendLog('info', message, config);
}
