import React, {useReducer, useContext} from "react";
import { PokemonContext } from "./pokemonContext";
import { pokemonReducer } from "./pokemonReducer";
import { ScreenContext } from "./screen/screenContext";
import { CLEAR_ERROR, FETCH_POKEMON, SHOW_ERROR } from "./types";

export const PokemonState = ({children}) => {
    const initialState = {
        pokemons:[],
        loading: false,
        error: null
    }
    const [state, dispatch] = useReducer(pokemonReducer, initialState)
    const {changeScreen} = useContext(ScreenContext)
    const showError = error => dispatch({type: SHOW_ERROR, error})
    const clearError = () => dispatch({type: CLEAR_ERROR})
    const fetchPokemons = async() => {
    try{
    const response= await fetch('https://pokeapi.co/api/v2/pokemon',
        {
          method: "GET",
          headers: {'Content-Type': 'application/json'}
        }
        )
      const data = await response.json()
      const pokemons = Object.keys(data.results).map(key=>({...data.results[key], id:key}))
      dispatch({type: FETCH_POKEMON, pokemons})
    }
    catch(e) {
        showError()
        console.log(e)
    }
    
     
    }

    return <PokemonContext.Provider 
    value={{pokemons: state.pokemons,
        error: state.error,
        fetchPokemons
    }}>
        {children}
    </PokemonContext.Provider>
}