import React, {useReducer, useContext} from "react";
import { PokemonContext } from "./pokemonContext";
import { pokemonReducer } from "./pokemonReducer";
import { ScreenContext } from "./screen/screenContext";

export const PokemonState = ({children}) => {
    const initialState = {
        pokemons:[]
    }
    const [state, dispatch] = useReducer(pokemonReducer, initialState)
    const {changeScreen} = useContext(ScreenContext)
    
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

    return <PokemonContext.Provider 
    value={{pokemons: state.pokemons
    }}>
        {children}
    </PokemonContext.Provider>
}