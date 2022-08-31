import { createContext, useState } from 'react'

export const DEFAULT_BACKGROUNDS = [['rgb(202, 197, 49)', 'rgb(243, 249, 167)']]

export const BackgroundsContext = createContext()

export const BackgroundsProvider = ({ children, backgrounds }) => {
    const [backgroundsList, setNewBackgroundsList] = useState({
        backgrounds: backgrounds || DEFAULT_BACKGROUNDS,
        index: 0,
    })

    const setNewBackgrounds = (values) => {
        const previousBackgrounds = backgroundsList.backgrounds
        const newIndex = backgroundsList.index++
        setNewBackgroundsList({
            backgrounds: [...previousBackgrounds, values],
            newIndex,
        })
    }

    return (
        <BackgroundsContext.Provider
            value={{ backgroundsState: backgroundsList, setNewBackgrounds }}
        >
            {children}
        </BackgroundsContext.Provider>
    )
}
