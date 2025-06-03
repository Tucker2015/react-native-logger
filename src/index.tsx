export {
  logError,
  logWarning,
  logInfo,
  setDefaultAppName,
} from './logger/logger';

import {
  logError,
  logWarning,
  logInfo,
  setDefaultAppName,
} from './logger/logger';
// @ts-ignore
globalThis.logError = logError;
// @ts-ignore
globalThis.logWarning = logWarning;
// @ts-ignore
globalThis.logInfo = logInfo;
// @ts-ignore
globalThis.setDefaultAppName = setDefaultAppName;
