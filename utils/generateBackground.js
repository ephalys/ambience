import { getLastItemArray } from '@/utils/getLastItemArray'

const generateRandomNumber = () => {
    return ~~(Math.random() * (255 + 1))
}

const generateRgb = () => {
    return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`
}

export const generateNewBackgroundsArray = (backgrounds) => {
    const lastGradientLength = getLastItemArray(backgrounds).length
    let newBackgrounds = []

    for (let i = 0; i < lastGradientLength; i++) {
        newBackgrounds.push(generateRgb())
    }

    return newBackgrounds
}
