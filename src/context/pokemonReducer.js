import { FETCH_POKEMON, SHOW_ERROR, CLEAR_ERROR, FETCH_TO_POKEMON } from "./types"

const handlers = {
[FETCH_POKEMON]: (state, {pokemons}) => ({...state, pokemons}),
[FETCH_TO_POKEMON]: (state, {pokemonInfo})=>({...state, pokemonInfo}),
[SHOW_ERROR]: (state, {error}) => ({...state, error}),
[CLEAR_ERROR]: state=> ({...state, error: null}),
DEFAULT: state=>state
}

export const pokemonReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}