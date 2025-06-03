declare function logError(
  message: string,
  config?: { serverUrl?: string; appName?: string }
): void;
declare function logWarning(
  message: string,
  config?: { serverUrl?: string; appName?: string }
): void;
declare function logInfo(
  message: string,
  config?: { serverUrl?: string; appName?: string }
): void;
declare function setDefaultAppName(appName: string): void;
