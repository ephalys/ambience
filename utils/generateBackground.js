const generateRandomNumber = () => {
    return ~~(Math.random() * (255 + 1))
}

const generateRgb = () => {
    return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`
}

export const generateNewBackgroundsArray = (backgrounds) => {
    let newBackgrounds = []

    for (let i = 0; i < backgrounds.length; i++) {
        newBackgrounds.push(generateRgb())
    }

    return newBackgrounds
}
