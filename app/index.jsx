import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Logo from '../componentes/Logo';
import CustomButton from '../componentes/CustomButton';
import LoginInputs from '../componentes/LoginInputs';
import { useRouter } from 'expo-router';
import { outfitFonts } from '../styles/fonts';
import { useFonts } from '@expo-google-fonts/outfit';


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Logo />
        <LoginInputs
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        <View style={{ marginTop: 30 }}>
          <CustomButton
            title="Login"
            onPress={()=> router.push('HomeScreen')}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
