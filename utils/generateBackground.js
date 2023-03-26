import { getLastItemArray } from '@/utils/getLastItemArray';

const getRandomNumber = () => {
    return ~~(Math.random() * (255 + 1));
};

const generateRgbColor = () => {
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};

export const generateNewBackgroundsArray = (backgrounds) => {
    const lastGradientLength = getLastItemArray(backgrounds).length;
    let newBackground = [];

    for (let i = 0; i < lastGradientLength; i++) {
        newBackground.push(generateRgbColor());
    }

    return newBackground;
};
