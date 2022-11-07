import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/components/Navbar';
import * as Font from 'expo-font';
import {} from '@expo/vector-icons'
import { useEffect, useCallback, useState } from 'react';
import { PokemonName } from './src/components/PokemonName';
import { MainScreen } from './src/screens/MainScreen';
import { PokemonInfoScreen } from './src/screens/PokemonInfoScreen';

export default function App() {
const [pokemons, setPokemons] = useState([])
const [pokemonId, setPokemonId] = useState(null)

let content = (
<MainScreen pokemons={pokemons} onOpenPokemon={(id)=> {setPokemonId(id)}}/>
)

if(pokemonId){
  content = <PokemonInfoScreen />
}
  return (
    <View style={styles.container}>
      <Navbar />
      <View>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow'
  },
});
