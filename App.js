import React from 'react';
import * as Font from 'expo-font';
import {} from '@expo/vector-icons'
import { MainLayout } from './src/MainLayout';
import { PokemonState } from './src/context/pokemonState';
import { ScreenState } from './src/context/screen/ScreenState';

export default function App() {

  return (
    <ScreenState>
      <PokemonState>
        <MainLayout />
      </PokemonState>
    </ScreenState>
    
    
  );
}


