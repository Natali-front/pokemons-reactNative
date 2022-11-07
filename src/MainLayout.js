import React, {useContext, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import { Navbar } from './components/Navbar'
import {PokemonInfoScreen} from './screens/PokemonInfoScreen'
import { MainScreen } from './screens/MainScreen'
import { PokemonContext } from './context/pokemonContext'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
// const pokemonsContext = useContext(PokemonContext)
const {pokemonId} = useContext(ScreenContext)
// const [pokemons, setPokemons] = useState([])
// const [pokemonId, setPokemonId] = useState(null)

// let content = (
//     <MainScreen/>
//     )
    
//     if(pokemonId){
//       const selectedPokemon = pokemonsContext.pokemons.find((pokemon)=> pokemon.id == pokemonId)
//       content = <PokemonInfoScreen 
//       goBack={()=> changeScreen(null)} 
//       pokemon={selectedPokemon} />
//     }

    return  <View style={styles.container}>
    <Navbar />
    <View>
      {pokemonId ? PokemonInfoScreen : MainScreen}
    </View>
  </View>
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'yellow'
    },
  });