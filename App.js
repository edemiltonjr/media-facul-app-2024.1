import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/Logo'
import Form from './src/Form'

export default function App() {
  return (
    <View style={styles.main}>
      <Logo/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  container1: {
    flex: 3,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    backgroundColor: '#F0F',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
