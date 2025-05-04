import { TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const atalhos = [
    { id: '1', title: 'Quadro Semanal', icon: 'calendar', color: '#4CAF50' },
    { id: '2', title: 'Cadastrar Atividade', icon: 'edit', color: '#0000FF' },
  ];

export default function BotaoAtalho({ texto, icone, cor }) 
    {atalhos.map((atalho) => (
    <TouchableOpacity key={atalho.id} style={[styles.atalhoBtn, { backgroundColor: atalho.color }]}>
    <Feather name={atalho.icon} size={20} color="#fff" />
    <Text style={styles.atalhoText}>{atalho.title}</Text>
    </TouchableOpacity>
))}

const styles = StyleSheet.create({
    atalhoBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        borderRadius: 12,
        marginTop: 10,
        gap: 10,
      },
    
      atalhoText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Outfit-Medium',
      },
});
