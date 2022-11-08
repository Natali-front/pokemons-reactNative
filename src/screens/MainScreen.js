import React, { useContext, useEffect, useCallback } from "react";
import {View, StyleSheet, FlatList} from 'react-native'
import { PokemonName } from "../components/PokemonName";
import { PokemonContext } from "../context/pokemonContext";
import { ScreenContext } from "../context/screen/screenContext";

export const MainScreen = () => {
  
  const {pokemons, fetchPokemons, error} = useContext(PokemonContext)
  const {changeScreen} = useContext(ScreenContext)
  
  const loadPokemons = useCallback(async()=> await fetchPokemons(), [fetchPokemons])

  useEffect(()=> {
    loadPokemons()
  }, [])
  
  return (
  <View style={styles.wrapItems}>
    <FlatList                                                        
      data = {pokemons}
      renderItem = {({item})=> (
        <PokemonName pokemon={item} onOpen={changeScreen}/>
      )}
      />
</View>
    )
}
const styles = StyleSheet.create({
  wrapItems:{
  }

})