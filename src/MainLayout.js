import React, {useContext, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import { Navbar } from './components/Navbar'
import {PokemonInfoScreen} from './screens/PokemonInfoScreen'
import { MainScreen } from './screens/MainScreen'
import { PokemonContext } from './context/pokemonContext'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {

const {pokemonId} = useContext(ScreenContext)

 return  <View style={styles.container}>
    <Navbar />
    <View>
      {pokemonId ? <PokemonInfoScreen /> : <MainScreen />}
    </View>
  </View>
}

const styles = StyleSheet.create({
    container: {
    },
  });