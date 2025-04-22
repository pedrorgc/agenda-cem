import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from './componentes/Logo';
import CustomButton from './componentes/CustomButton';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import LoginInputs from './componentes/LoginInputs';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Outfit-Thin': require('./assets/fonts/Outfit-Thin.ttf'),
      'Outfit-ExtraLight': require('./assets/fonts/Outfit-ExtraLight.ttf'),
      'Outfit-Light': require('./assets/fonts/Outfit-Light.ttf'),
      'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
      'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
      'Outfit-SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
      'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
      'Outfit-ExtraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
      'Outfit-Black': require('./assets/fonts/Outfit-Black.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Logo/>
        <LoginInputs/>
        <View style={{ marginTop: 30 }}>
          <CustomButton title="Login" onPress={() => alert("Botão pressionado")} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },

  overlay: {
    flex: 1,  
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
  },

  form: {
    width: '80%',
    marginBottom: 20
  },

  input:{
    height: 40,
    marginVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#c5c5c5',
    fontFamily: 'Outfit-Regular',
    shadowColor: '#002DDF',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3
  },

  text:{
    fontSize: 14,
    color: '#000',
    fontFamily: 'Outfit-Regular'
  },

  loginText:{
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Outfit-Regular'
  },
});
