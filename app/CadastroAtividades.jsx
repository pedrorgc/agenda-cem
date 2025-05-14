import { StyleSheet, Text, View } from "react-native";
import Inputs from "../componentes/Inputs";

export default function CadastroAtividades() {
    return (
        <View style={styles.container}>
            <View style={styles.overlay}>
                <Inputs/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    // overlay: {
    //     backgroundColor: 'white'
    // }
})