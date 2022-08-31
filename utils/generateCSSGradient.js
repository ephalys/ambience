const generateCSSGradient = (backgrounds) => {
    return `linear-gradient(45deg, ${backgrounds.map(
        (background) => `${background}`
    )})`
}

export default generateCSSGradient
