import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from "./src/routes/Navigation"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
