import React from "react";
import {View, StyleSheet, FlatList} from 'react-native'
import { PokemonName } from "../components/PokemonName";

export const MainScreen = ({pokemons, onOpenPokemon}) => {
    return (
<View>
<FlatList                                                        
      data = {pokemons}
      renderItem = {({item})=> (
        <PokemonName pokemon={item} onOpen={onOpenPokemon}/>
      )}
      />
</View>
    )
}
const styles = StyleSheet.create({

})