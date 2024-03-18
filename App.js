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
    backgroundColor: '#09C',
  },
});
