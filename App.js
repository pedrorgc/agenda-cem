import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from './componentes/Logo';
import UserLogin from './componentes/UserLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <UserLogin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ''
  }
})