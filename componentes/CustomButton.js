import { Text, TouchableOpacity, StyleSheet } from "react-native"

const CustomButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#1900ff',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Outfit-Bold'
    }
});

export default CustomButton;