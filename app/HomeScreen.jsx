import { ScrollView, StyleSheet, Text, View } from "react-native";
import HelloCard from "../componentes/HelloCard";
import { useRouter } from "expo-router";
import Cards from "../componentes/Cards";
import BotaoAtalho from "../componentes/BotaoAtalho";

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>            
            <HelloCard/>
            <Cards/>
            <BotaoAtalho/>
        </View>

)
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 5
    },
})