import React from "react";
import { PokemonContext } from "./pokemonContext";

export const PokemonState = ({children}) => {
    return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
}