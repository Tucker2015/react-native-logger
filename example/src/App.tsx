import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  logWarning('App component has been rendered');
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
