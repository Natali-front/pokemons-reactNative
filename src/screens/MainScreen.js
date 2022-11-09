import React, { useContext, useEffect, useCallback } from "react";
import { View, StyleSheet, FlatList } from 'react-native'
import { PokemonName } from "../components/PokemonName";
import { PokemonContext } from "../context/pokemonContext";
import { ScreenContext } from "../context/screen/screenContext";

export const MainScreen = () => {

  const { pokemons, fetchPokemons, error, loadMorePokemons, nextPage } = useContext(PokemonContext)
  const { changeScreen } = useContext(ScreenContext)

  const loadPokemons = useCallback(async () => await fetchPokemons(), [fetchPokemons])
  const loadMore = useCallback(async() => await loadMorePokemons(nextPage))

  useEffect(() => {
    loadPokemons()
  }, [])

  useEffect(() => {
    setTimeout(()=>{
       loadMore()
    }, 0)
   
  }, [])

  if (error) {
    return <View style={styles.errorWrapper}><Text>Something is going wrong...</Text></View>
  }

  return (
    <View style ={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={pokemons}
        onEndReached={()=>loadMorePokemons()}
        onEndReachedThreshold = {0.5}
        renderItem={({ item }) => (
          <PokemonName
            pokemon={item}
            onOpen={changeScreen} />
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  errorWrapper: {
    justifyContent: 'center'
  },
  container:{
    marginBottom: 20,
    alignItems: 'center'
  }
})

