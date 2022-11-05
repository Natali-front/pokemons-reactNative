import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/components/Navbar';
import * as Font from 'expo-font';
import {} from '@expo/vector-icons'
import { useEffect, useCallback, useState } from 'react';
import { PokemonName } from './src/components/PokemonName';

export default function App() {
const [pokemons, SetPokemons] = useState([])

useEffect(()=> {
    loadPokemons()
  }, [])

const loadPokemons = useCallback(async()=> await fetchPokemons(), [fetchPokemons])

const fetchPokemons = async() => {
  const response= await fetch('https://pokeapi.co/api/v2/pokemon',
  {
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  }
  )
const data = await response.json()
console.log(data.results)
}


  return (
    <View style={styles.container}>
      <Navbar />
      <FlatList 
      data = {pokemons}
      renderItem = {({item})=> (
        <PokemonName pokemon={item}/>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow'
  },
});
