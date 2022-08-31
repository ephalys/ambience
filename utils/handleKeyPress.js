import { useCallback } from 'react'
import copy from 'copy-to-clipboard'
import generateCSSGradient from '@/utils/generateCSSGradient'
import { generateNewBackgroundsArray } from '@/utils/generateBackground'

export const handleKeyPress = (e, backgrounds, setNewBackgrounds) => {
    if (e.key === ' ') {
        const newBackgroundsArray = generateNewBackgroundsArray(backgrounds)

        setNewBackgrounds(newBackgroundsArray)
    } else if (e.key === 'c') {
        copy(generateCSSGradient(backgrounds))
        alert('Copied')
    }
}
