import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from './componentes/Logo';
import CustomButton from './componentes/CustomButton';

const image = require("./assets/Background1.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <Logo />
          <View style={styles.form}>
            <Text style={styles.loginText}>Faça Login Abaixo</Text>
            <Text style={styles.text}>Usuário</Text>
            <TextInput style={styles.input} placeholder="Digite seu usuário"/>
            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha"/>
          </View>
          <CustomButton title="Login" onPress={() => alert("Botão pressionado")} />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
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
    backgroundColor: '#ffffff'
  },

  text:{
    fontSize: 14,
    color: '#000'
  },

  loginText:{
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
