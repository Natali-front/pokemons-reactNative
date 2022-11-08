import { FETCH_POKEMON, SHOW_ERROR, CLEAR_ERROR } from "./types"

const handlers = {
[FETCH_POKEMON]: (state, {pokemons}) => ({...state, pokemons}),
[SHOW_ERROR]: (state, {error}) => ({...state, error}),
[CLEAR_ERROR]: state=> ({...state, error: null}),
DEFAULT: state=>state
}

export const pokemonReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}