import { createContext, useState } from 'react';

export const DEFAULT_BACKGROUNDS = [['rgb(202, 197, 49)', 'rgb(243, 249, 167)']];
export const BackgroundsContext = createContext();

export const BackgroundsProvider = ({ children, backgrounds }) => {
    const [backgroundsList, setBackgroundsList] = useState(backgrounds || DEFAULT_BACKGROUNDS);
    const [backgroundIndexToShow, setBackgroundIndexToShow] = useState(0);

    const setNewBackgrounds = (values) => {
        setBackgroundsList([...backgroundsList, values]);
        setBackgroundIndexToShow(backgroundIndexToShow + 1);
    };

    return (
        <BackgroundsContext.Provider
            value={{
                backgrounds: backgroundsList,
                setNewBackgrounds,
                backgroundIndexToShow,
                setBackgroundIndexToShow,
            }}
        >
            {children}
        </BackgroundsContext.Provider>
    );
};
