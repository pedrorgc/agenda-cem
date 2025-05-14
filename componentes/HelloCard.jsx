import { StyleSheet, Text, View } from "react-native"

const HelloCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.overlay}>
                <Text style={styles.username}>Olá, Pedro</Text>
                <Text style={styles.description}>Veja suas atividades abaixo</Text>
                <Text style={styles.atividades}>Atividades</Text>
                <Text style={styles.date}>Quarta-feira, 30 de Abril</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create ({
    container:{
        flex: 1
    },

    overlay:{
        flex: 1,
        justifyContent: 'left',
        padding: 20,
        alignItems: 'flex-start',
        width: '100%'
    },

    username:{
        fontFamily: 'Outfit-Bold',
        fontSize: 22,
        textAlign: 'left'
    },

    description:{
        fontFamily: 'Outfit-Light',
        fontSize: 14,
        textAlign: 'justify'
    },

    atividades:{
        fontFamily: 'Outfit-Bold',
        fontSize: 22,
        marginTop: 20
    },

    date:{
        fontFamily: 'Outfit-Light',
        fontSize: 14,
        marginBottom: 10
    }
})


export default HelloCard;