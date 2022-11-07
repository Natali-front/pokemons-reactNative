import React, { useContext, useEffect, useCallback } from "react";
import {View, StyleSheet, FlatList} from 'react-native'
import { PokemonName } from "../components/PokemonName";
import { PokemonContext } from "../context/pokemonContext";
import { ScreenContext } from "../context/screen/screenContext";

export const MainScreen = () => {
  
  const {pokemons} = useContext(PokemonContext)
  const {changeScreen} = useContext(ScreenContext)
  const {fetchPokemons} = useContext(PokemonContext)

  const loadPokemons = useCallback(async()=> await fetchPokemons(), [fetchPokemons])
  // const fetchPokemons = async() => {
  //     const response= await fetch('https://pokeapi.co/api/v2/pokemon',
  //     {
  //       method: "GET",
  //       headers: {'Content-Type': 'application/json'}
  //     }
  //     )
  //   const data = await response.json()
  //   const pokemons = Object.keys(data).map(key=>({...data[key], id:key}))
   
  // }
//   useEffect(()=> {
//     fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((response) => response.json())
//     .then((json) => setPokemons(json))
//     .catch((error) => console.error(error))
//     .finally(() => setLoading(false));
// }, []);

    return (
<View>
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

})