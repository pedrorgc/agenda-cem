import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const atividades = [
  { id: '1', name: 'Basquete', icon: 'basketball', local: 'Centro Esportivo Municipal', color: '#FFE0B2' },
  { id: '2', name: 'Futsal', icon: 'futbol', local: 'Centro Esportivo Municipal', color: '#E0E0FF' },
];

const Cards = () => {
  return (
    <View>
      <FlatList
        data={atividades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => console.log('Atividade selecionada')}
          >
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
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Cards;
