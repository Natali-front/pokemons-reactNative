import React, { useReducer, useContext } from "react";
import { PokemonContext } from "./pokemonContext";
import { pokemonReducer } from "./pokemonReducer";
import { ScreenContext } from "./screen/screenContext";
import { CLEAR_ERROR, FETCH_POKEMON, SHOW_ERROR, FETCH_TO_POKEMON, FETCH_MORE } from "./types";

export const PokemonState = ({ children }) => {
    const initialState = {
        pokemons: [],
        loading: false,
        error: null,
        pokemonInfo: {},
        nextPage: null
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
            const pokemons = Object.keys(data.results).map(key => ({ ...data.results[key], id: Number(key)+1 }))
            const nextPage = data.next
            dispatch({ type: FETCH_POKEMON, pokemons, nextPage })
        }
        catch (e) {
            showError()
            console.log(e)
        }
    }

    const loadMorePokemons = async() => {
        clearError()
        try {
            const response = await fetch(state.nextPage,
                {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            const data = await response.json()
            const pokemons = state.pokemons.concat(Object.keys(data.results).map(key => ({ ...data.results[key], id: Number(state.pokemons.length)+Number(key)+1 })))
            const nextPage = data.next
            dispatch({ type: FETCH_MORE, pokemons, nextPage })
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
                height: data.height,
                type: data.types.map(item=> item.type.name)                               
            }
            dispatch({ type: FETCH_TO_POKEMON, pokemonInfo })
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
            nextPage: state.nextPage,
            fetchPokemons,
            fetchToPokemon,
            loadMorePokemons,
            changeScreen
        }}>
        {children}
    </PokemonContext.Provider>
}