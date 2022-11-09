import { FETCH_POKEMON, SHOW_ERROR, CLEAR_ERROR, FETCH_TO_POKEMON, FETCH_MORE } from "./types"

const handlers = {
[FETCH_POKEMON]: (state, {pokemons, nextPage}) => ({...state, pokemons, nextPage}),
[FETCH_TO_POKEMON]: (state, {pokemonInfo})=>({...state, pokemonInfo}),
[FETCH_MORE]: (state, {pokemons,nextPage}) => ({...state, pokemons, nextPage}),
[SHOW_ERROR]: (state, {error}) => ({...state, error}),
[CLEAR_ERROR]: state=> ({...state, error: null}),
DEFAULT: state=>state
}

export const pokemonReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}