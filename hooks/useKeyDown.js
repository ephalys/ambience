import { useEffect } from 'react';
import { generateNewBackgroundsArray } from '@/utils/generateBackground';
import generateCSSGradient from '@/utils/generateCSSGradient';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';

export const useKeyDown = (context) => {
    const {
        backgrounds,
        setNewBackgrounds,
        backgroundIndexToShow,
        setBackgroundIndexToShow,
    } = context;

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === ' ') {
                const newBackgroundsArray =
                    generateNewBackgroundsArray(backgrounds);

                setNewBackgrounds(newBackgroundsArray);
                toast(['Generated', 'Some colors']);
            } else if (e.key === 'c') {
                const generatedCSSGradient = generateCSSGradient(
                    backgrounds[backgroundIndexToShow]
                );
                copy(generatedCSSGradient);
                toast(['Copied', generatedCSSGradient]);
            } else if (e.key === 'ArrowRight') {
                if (backgroundIndexToShow < backgrounds.length - 1) {
                    setBackgroundIndexToShow(backgroundIndexToShow + 1);
                    toast('Next');
                }
            } else if (e.key === 'ArrowLeft') {
                if (!backgroundIndexToShow <= 0) {
                    setBackgroundIndexToShow(backgroundIndexToShow - 1);
                    toast('Previous');
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress, false);

        return () => {
            document.removeEventListener('keydown', handleKeyPress, false);
        };
    }, [
        backgroundIndexToShow,
        backgrounds,
        setBackgroundIndexToShow,
        setNewBackgrounds,
    ]);
};
