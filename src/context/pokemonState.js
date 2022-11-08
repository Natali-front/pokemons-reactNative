import React, { useReducer, useContext } from "react";
import { PokemonContext } from "./pokemonContext";
import { pokemonReducer } from "./pokemonReducer";
import { ScreenContext } from "./screen/screenContext";
import { CLEAR_ERROR, FETCH_POKEMON, SHOW_ERROR, FETCH_TO_POKEMON } from "./types";

export const PokemonState = ({ children }) => {
    const initialState = {
        pokemons: [],
        loading: false,
        error: null,
        pokemonInfo:{}
    }
    const [state, dispatch] = useReducer(pokemonReducer, initialState)
    const { changeScreen } = useContext(ScreenContext)
    const showError = error => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: CLEAR_ERROR })
  


    const fetchPokemons = async () => {
        clearError()
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon',
                {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            const data = await response.json()
            const pokemons = Object.keys(data.results).map(key => ({ ...data.results[key], id: key }))
            dispatch({ type: FETCH_POKEMON, pokemons })
        }
        catch (e) {
            showError()
            console.log(e)
        }
    }

    const fetchToPokemon = async (pokemonId) => {
        clearError()
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.toString()}/`,
                {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            const data = await response.json()
        
            const pokemonInfo = {
                name: data.name,
                pokeimage: data.sprites.front_default,
                weight: data.weight,
                height: data.height
            }
            dispatch({ type: FETCH_TO_POKEMON, pokemonInfo})
        }
        catch (e) {
            showError()
            console.log(e)
        }
    }

    return <PokemonContext.Provider
        value={{
            pokemons: state.pokemons,
            error: state.error,
            pokemonInfo: state.pokemonInfo,
            fetchPokemons,
            fetchToPokemon,
            changeScreen
        }}>
        {children}
    </PokemonContext.Provider>
}