import React, {useContext} from "react";
import {View, StyleSheet, Text} from 'react-native'
import { PokemonCard } from "../components/PokemonCard";
import { PokemonContext } from "../context/pokemonContext";
import { ScreenContext } from "../context/screen/screenContext";

export const PokemonInfoScreen = () => 
{
const {pokemons} = useContext(PokemonContext)
const {pokemonId, changeScreen} = useContext(ScreenContext)
const pokemon = pokemons.map(item=> item.id === pokemonId)
    
return (
<View>
    <PokemonCard pokemon={PokemonContext.pokemons}/>
</View>
    )
}
const styles = StyleSheet.create({
    
})