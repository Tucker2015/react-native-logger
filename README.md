# react-native-logger

A simple logging library for React Native (Expo & iOS/Android) with support for remote logging and global usage.

## Installation

```sh
npm install react-native-logger
# or
yarn add react-native-logger
```

## Usage

### 1. Import the library once in your app (for side effects)

At the top of your main entry file (e.g. `App.tsx` or `index.js`):

```js
import 'react-native-logger';
```

This attaches the logger functions to `globalThis`, so you can use them anywhere in your app **without importing**.

### 2. (TypeScript) Add global types

Create a `global.d.ts` file in your project root or `src/` folder:

```ts
declare function logError(message: string, config?: { serverUrl?: string; appName?: string }): void;
declare function logWarning(message: string, config?: { serverUrl?: string; appName?: string }): void;
declare function logInfo(message: string, config?: { serverUrl?: string; appName?: string }): void;
declare function setDefaultAppName(appName: string): void;
```

### 3. Set your app name (optional, but recommended)

Call this once at the start of your app:

```js
setDefaultAppName('MyAwesomeApp');
```

### 4. Log anywhere in your app

```js
logInfo('App started');
logWarning('This is a warning');
logError('Something went wrong', { serverUrl: 'https://your-server.com/log' });
```

---

## API

- `logInfo(message: string, config?)`
- `logWarning(message: string, config?)`
- `logError(message: string, config?)`
- `setDefaultAppName(appName: string)`

All log functions send logs to the default server unless you override with the `config` parameter.

---

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
