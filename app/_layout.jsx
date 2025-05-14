import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { outfitFonts } from '../styles/fonts';
import { useEffect } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts(outfitFonts);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
      <Drawer.Screen
          name="HomeScreen" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Painel Principal',
            // drawerPosition: 'right',
            // drawerIcon: ''
          }}
        />
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Login',
            title: 'Login',
            // headerShown: false,
            drawerItemStyle: { display: 'flex' }, // Hide the login screen from the drawer menu
          }}
        />
        <Drawer.Screen
          name='CadastroAtividades'
          options={{
            drawerLabel: 'Cadastrar Atividades',
            title: 'Cadastrar Atividades'
          }}
        />
      </Drawer>
  
    </GestureHandlerRootView>
  );
}
