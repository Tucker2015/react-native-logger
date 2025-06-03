# react-native-logger

A simple logging library for React Native (Expo & iOS/Android) with support for remote logging and global usage.

## Installation

```sh
npm install @kevtucker/react-native-logger
# or
yarn add @kevtucker/react-native-logger
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
declare function logError(...args: any[]): void;
declare function logWarning(...args: any[]): void;
declare function logInfo(...args: any[]): void;
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
logWarning('This is a warning', { some: 'context' });
logError('Something went wrong', { serverUrl: 'https://your-server.com/log' });
logInfo('App initialized successfully', true);
logError('User object:', { id: 123, name: 'Alice' });
```

---

## API

- `logInfo(...args: any[])`
- `logWarning(...args: any[])`
- `logError(...args: any[])`
- `setDefaultAppName(appName: string)`

All log functions accept any number of arguments (like `console.log`). If the last argument is an object with `serverUrl` or `appName`, it will be used as config. All other arguments are stringified and joined for the log message. All logs are sent to the default server unless you override with the `config` parameter.

---

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
