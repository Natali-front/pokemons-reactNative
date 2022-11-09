import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Navbar } from './components/Navbar'
import { PokemonInfoScreen } from './screens/PokemonInfoScreen'
import { MainScreen } from './screens/MainScreen'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {

  const { pokemonId } = useContext(ScreenContext)

  return <View>
    <Navbar />
    <View>
      {pokemonId ? <PokemonInfoScreen /> : <MainScreen />}
    </View>
  </View>
}

