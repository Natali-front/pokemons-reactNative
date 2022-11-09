import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native'


export const PokemonCard = ({ goBack, pokemonInfo, pokemon }) => {
    return (
        <View style={styles.wrap}>

            <View style={styles.imgWrap}>
                <Image source={{ uri: pokemonInfo.pokeimage }} style={{ width: 120, height: 120 }} />
            </View>
            <View>
                <Text style={{ fontSize: 16, textTransform: 'capitalize', marginBottom: 10 }}>Pokemon's name:  {pokemonInfo.name}</Text>
            </View>
            {/* <View>
                <Text>Pokemon's type: { }</Text>
            </View> */}
            <View>
                <Text  style={{ fontSize: 16, textTransform: 'capitalize', marginBottom: 10 }}>Pokemon's weight:  {pokemonInfo.weight}</Text>
            </View>
            <View>
                <Text  style={{ fontSize: 16, textTransform: 'capitalize', marginBottom: 10 }}>Pokemon's height:  {pokemonInfo.height}</Text>
            </View>
            <View style={styles.btnWrap}>
                <Button onPress={goBack} title='Back' style={styles.btn} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        justifyContent: 'center',
        marginLeft: 20
    },
    imgWrap: {
        alignItems: 'center'
    },
    btnWrap: {
        width: '60%',
        justifyContent: 'center',
        marginTop: 20,
        margin: 'auto'
    },
    btn: {
        alignItems: 'center',
        borderRadius: 2
    }
})