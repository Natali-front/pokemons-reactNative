import React, {useContext, useCallback, useEffect} from "react";
import {View, StyleSheet, Text} from 'react-native'
import { PokemonCard } from "../components/PokemonCard";
import { PokemonContext } from "../context/pokemonContext";
import { ScreenContext } from "../context/screen/screenContext";

export const PokemonInfoScreen = () => 
{
const {pokemons, pokemonInfo, fetchToPokemon} = useContext(PokemonContext)
const {pokemonId, changeScreen} = useContext(ScreenContext)

const pokemon = pokemons.map(item=> item.id + 1 === pokemonId)

const loadPokemons = useCallback(async()=> await fetchToPokemon(pokemonId))

useEffect(()=> {
    setTimeout(()=>{
      loadPokemons()  
    }, 0)
}, [])

    
return (

 <View>
    <PokemonCard 
    pokemonInfo={pokemonInfo} 
    goBack= {() => changeScreen(null)}
    />
</View>
    ) 
}
const styles = StyleSheet.create({
    
})