import { createContext } from 'react'

export const BackgroundsContext = createContext({
    backgrounds: [],
    setBackgrounds: (backgrounds) => {},
})
