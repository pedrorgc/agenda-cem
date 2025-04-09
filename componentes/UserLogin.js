import { StyleSheet, Text, TextInput, View } from "react-native"


const UserLogin = () => {
    return <View>
        <Text style={styles.loginText}>Faça Login Abaixo</Text>
        <Text style={styles.text}>Usuário</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>Senha</Text>
        <TextInput style={styles.input}/>
    </View>
}

const styles = StyleSheet.create({
    input:{
        height: 35,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },

    text:{
        fontSize: 14
    },

    loginText:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        fontSize: 16,
        textAlign: 'center'
    }
})


export default UserLogin;