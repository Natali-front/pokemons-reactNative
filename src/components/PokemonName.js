import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const PokemonName = ({pokemon}) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.5}
        onPress = {()=> console.log(pokemon)}
        style={styles.item}>
            <Text style={styles.name}>{pokemon.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        alignItems:'center',
        padding: 15
    },
    name:{
        fontSize: 16
    }
})