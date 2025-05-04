import { Feather } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { Image, StyleSheet, Text, View } from "react-native"


const logo = require("../assets/GestSport_Text.png")

const NavBar = () => {
    return <View style={styles.navbar}>
        <Image style={styles.logo} source={logo} resizeMode="contain"/>
        <TouchableOpacity>
            <Feather name="menu" size={20} color="#000" />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create ({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 50,
        width: '100%'
    },
    
    logo: {
        width: 120,
        padding: 'auto'
    },
})

export default NavBar;