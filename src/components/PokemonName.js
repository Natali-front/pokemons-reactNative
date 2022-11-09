import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const PokemonName = ({ pokemon, onOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onOpen(pokemon.id)}
            style={styles.item}
        >
            <View style={styles.pokNameWrap}>
                <Text style={styles.name}>{pokemon.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 10,
       
    },
    name: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase',
        padding: 5,
        
    },
    pokNameWrap: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#9fced6'
    }
})