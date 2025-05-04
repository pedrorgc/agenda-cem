import { ScrollView, StyleSheet, Text, View } from "react-native";
import HelloCard from "../componentes/HelloCard";
import { useRouter } from "expo-router";
import Cards from "../componentes/Cards";
import BotaoAtalho from "../componentes/BotaoAtalho";

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View>            
            <HelloCard />
            <Cards />
            <BotaoAtalho/>
        </View>

)
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    overlay:{
        flex: 1
    }
})