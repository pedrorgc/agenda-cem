import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome6, Feather } from '@expo/vector-icons';

const atividades = [
  { id: '1', name: 'Basquete', icon: 'basketball', local: 'Centro Esportivo Municipal', color: '#FFE0B2' },
  { id: '2', name: 'Futsal', icon: 'futbol', local: 'Centro Esportivo Municipal', color: '#E0E0FF' },
];

const atalhos = [
  { id: '1', title: 'Quadro Semanal', icon: 'calendar', color: '#4CAF50' },
  { id: '2', title: 'Cadastrar Atividade', icon: 'edit', color: '#0000FF' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Olá, Pedro</Text>
      <Text style={styles.subtitle}>Veja suas atividades abaixo</Text>

      <Text style={styles.sectionTitle}>Atividades</Text>
      <Text style={styles.date}>Segunda Feira, 21 de Abril</Text>

      <FlatList
        data={atividades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]} onPress={() => console.log('Atividade selecionada')}>
            <View style={styles.iconContainer}>
              <FontAwesome6 name={item.icon} size={20} color="black" />
            </View>
            <View>
              <Text style={styles.activityTitle}>{item.name}</Text>
              <Text style={styles.activityLocal}>{item.local}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Atalhos</Text>

      {atalhos.map((atalho) => (
        <TouchableOpacity key={atalho.id} style={[styles.atalhoBtn, { backgroundColor: atalho.color }]} onPress={() => console.log('Atalho selecionado')}>
          <Feather name={atalho.icon} size={20} color="#fff" />
          <Text style={styles.atalhoText}>{atalho.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  
  hello: {
    fontSize: 24,
    fontFamily: 'Outfit-Bold',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    marginTop: 20,
  },

  date: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    marginBottom: 10,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },

  iconContainer: {
    backgroundColor: '#fff5',
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },

  activityTitle: {
    fontFamily: 'Outfit-Bold',
    fontSize: 18,
  },

  activityLocal: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
  },

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
