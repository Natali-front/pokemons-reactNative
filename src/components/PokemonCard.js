import React from "react";
import {View, Text, Button} from 'react-native'


export const PokemonCard = ({goBack, pokemons}) => {
    return (
        <View>
            <View>
                <Text>Pokemon's name: {}</Text>
            </View>
            <View>
                <Text>Pokemon's image: {}</Text>
            </View>
            <View>
                <Text>Pokemon's type: {}</Text>
            </View>
            <View>
                <Text>Pokemon's weight: {}</Text>
            </View>
            <View>
                <Text>Pokemon's height: {}</Text>
            </View>
            <View>
                <Button onPress={goBack} title='Back'></Button>
            </View>
        </View>
    )
}