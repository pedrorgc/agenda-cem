import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const atividades = [
    {
        id: '1',
        name: 'Basquete',
        icon: 'basketball',
        color: '#FFA726',
        local: 'Centro Esportivo Municipal'
    },
    {
        id: '2',
        name: 'Futebol',
        icon: 'futbol',
        color: '#64B5F6',
        local: 'Centro Esportivo Municipal'
    },
    {
        id: '3',
        name: 'Vôlei',
        icon: 'volleyball',
        color: '#81C784',
        local: 'Poliesportivo do Ipê'
    }
];

const Cards = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            style={[styles.cardItem, { backgroundColor: item.color }]}
            onPress={() => console.log(`Atividade selecionada: ${item.name}`)}
        >
            <FontAwesome6 name={item.icon} size={26} color="white" style={styles.icon} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardLocation}>{item.local}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={atividades}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    listContent: {
        padding: 20,
        alignItems: 'center',
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 16,
        padding: 16,
        width: '100%',
        maxWidth: 350,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    icon: {
        marginRight: 14,
        color: 'black',
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Outfit-Regular',
        color: '#000000',
        marginBottom: 4,
    },
    cardLocation: {
        fontFamily: 'Outfit-Light',
        fontSize: 14,
        color: '#000000',
    },
});

export default Cards;
