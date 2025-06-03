import { registerRootComponent } from 'expo';
import { setDefaultAppName } from 'react-native-logger';
import App from './src/App';

// Attach logger functions to globalThis for global access (optional)
setDefaultAppName('Test');
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
