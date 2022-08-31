import { useEffect } from 'react'
import { generateNewBackgroundsArray } from '@/utils/generateBackground'
import generateCSSGradient from '@/utils/generateCSSGradient'
import copy from 'copy-to-clipboard'

export const useKeyDown = (context) => {
    const {
        backgrounds,
        setNewBackgrounds,
        backgroundIndexToShow,
        setBackgroundIndexToShow,
    } = context

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === ' ') {
                const newBackgroundsArray =
                    generateNewBackgroundsArray(backgrounds)

                setNewBackgrounds(newBackgroundsArray)
            } else if (e.key === 'c') {
                copy(generateCSSGradient(backgrounds))
                alert('Copied')
            } else if (e.key === 'ArrowRight') {
                const index =
                    backgroundIndexToShow >= backgrounds.length - 1
                        ? backgroundIndexToShow
                        : backgroundIndexToShow + 1
                setBackgroundIndexToShow(index)
            } else if (e.key === 'ArrowLeft') {
                const index =
                    backgroundIndexToShow <= 0 ? 0 : backgroundIndexToShow - 1
                setBackgroundIndexToShow(index)
            }
        }

        document.addEventListener('keydown', handleKeyPress, false)

        return () => {
            document.removeEventListener('keydown', handleKeyPress, false)
        }
    }, [
        backgroundIndexToShow,
        backgrounds,
        setBackgroundIndexToShow,
        setNewBackgrounds,
    ])
}
