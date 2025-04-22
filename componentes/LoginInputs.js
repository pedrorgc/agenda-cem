import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import CheckBox from 'expo-checkbox';
import { useState } from 'react';

export default function LoginInputs() {
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      {/* Input Usuário */}
      <View style={styles.inputWrapper}>
        <Feather name="user" size={20} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Usuário"
          placeholderTextColor="#555"
          style={styles.input}
        />
      </View>

      {/* Input Senha */}
      <View style={styles.inputWrapper}>
        <Feather name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#555"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Lembrar e Esqueci */}
      <View style={styles.optionsRow}>
        <View style={styles.checkboxContainer}>
          <CheckBox value={remember} onValueChange={setRemember} color="#000" />
          <Text style={styles.optionText}>Lembrar login</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    shadowColor: '#002DDF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, 
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 8,
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
  },
  forgotPassword: {
    color: 'blue',
    fontWeight: 'Outfit-Regular',
    fontSize: 14,
  },
});
