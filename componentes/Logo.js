import { Image, StyleSheet, Text, View } from "react-native";

const logo = require("../assets/GestSport_Logo.png");

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} resizeMode="contain" />
      <Text style={styles.text}>Bem Vindo Ao{"\n"} GestSport</Text>
      <Text style={styles.description}>
        Acompanhe e gerencie a agenda{"\n"}da Secretaria de Esportes da sua cidade
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30
  },
  logo: {
    width: 600,
    marginBottom: 10, 
  },
  text: {
    fontFamily: "Outfit-Bold",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontFamily: "Outfit-Regular",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    padding: 30,
    color: '#969696'
  },
});

export default Logo;
