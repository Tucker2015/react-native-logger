import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous operation, like fetching configuration
    const initializeApp = async () => {
      try {
        // Simulate a delay for app initialization
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Here you can perform any setup, like fetching initial data or configuration
        // For example, you can log an info message

        setAppReady(true);
        logInfo('App initialized', isAppReady);
      } catch (error) {
        // Log an error if initialization fails
        logError('Failed to initialize app', {
          appName: 'MyApp',
          serverUrl: 'https://logger.ktinternet.net/log',
        });
        setAppReady(false);
      }
    };
    initializeApp();
  }, [isAppReady]);
  if (!isAppReady) {
    logInfo('App is loading...', { appName: 'MyApp' });
  }

  logInfo('App is ready');
  return (
    <View style={styles.container}>
      <Text>Result: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
