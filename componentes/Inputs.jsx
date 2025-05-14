import { useState } from "react"
import { TextInput, View, StyleSheet, Text } from "react-native";

const Inputs = () => {
    const [text, onChangeText] = useState('');

    return (
        <View>
            <Text style={styles.sectionTitle}>Nova atividade</Text>
            <Text style={styles.description}>Nome da Atividade</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
            <Text style={styles.description}>Data</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
        </View>

    )
}

const styles = StyleSheet.create ({
    input:{
        height: 40,
        borderRadius: 10,
        margin: 12,
        padding: 10,
        backgroundColor: '#5f5f5f64',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5
    },

    sectionTitle:{
        fontSize: 24,
        fontFamily: 'Outfit-Bold',
        padding: 10
    },

    description:{
        fontFamily: 'Outfit-Regular',
        fontSize: 18,
        padding: 5,
        
    }
})

export default Inputs;