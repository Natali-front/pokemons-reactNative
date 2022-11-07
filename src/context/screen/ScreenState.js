import React, {useReducer} from 'react'
import { ScreenContext } from './screenContext'
import { screenReducer } from './screenReducer'

export const ScreenState = ({children}) => {
    const [state, dispatch] = useReducer(screenReducer, null)
    return <ScreenContext.Provider value ={{}}>{children}</ScreenContext.Provider>
}