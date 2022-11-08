import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const PokemonName = ({pokemon, onOpen}) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.5}
        onPress = {()=> onOpen(pokemon.id)}
        style={styles.item}
        >
            <View style={styles.pokNameWrap}>
                <Text style={styles.name}>{pokemon.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        padding: 10
    },
    name:{
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
        padding:5
    },
    pokNameWrap:{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        width: '90%',
        alignItems: 'center'

    }
})