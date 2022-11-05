import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const PokemonName = ({pokemon}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.name}>{pokemon.name}</Text>
        </View>
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