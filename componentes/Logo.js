import { Image, StyleSheet, Text, View } from "react-native"

const logo = require("../assets/agenda-cem.png")

const Logo = () => {
    return <View>
        <Image style={styles.logo} source={logo} resizeMode="contain"/>
    </View>
}

const styles = StyleSheet.create({
    logo:{
        width: 200,
        height: 200
    }
})

export default Logo;