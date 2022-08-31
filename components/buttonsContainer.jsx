import React from 'react'
import Button from '@/components/button'
import { IoReload, IoCopy } from 'react-icons/io5'
import { generateNewBackgroundsArray } from '@/utils/generateBackground'
import copy from 'copy-to-clipboard'
import generateCSSGradient from '@/utils/generateCSSGradient'
import useBackgrounds from 'hooks/useBackgrounds'
import toast from 'react-hot-toast'

const Actions = () => {
    const { backgrounds, setNewBackgrounds, backgroundIndexToShow } =
        useBackgrounds()

    const handleGenerateButtonClick = () => {
        const newBackgroundsArray = generateNewBackgroundsArray(backgrounds)
        setNewBackgrounds(newBackgroundsArray)
        toast('Generated')
    }

    const handleCopyButtonClick = () => {
        copy(generateCSSGradient(backgrounds[backgroundIndexToShow]))
        toast('Copied')
    }

    const buttons = [
        {
            id: 'generate',
            text: 'Generate new gradient',
            icon: <IoReload size={28} />,
            action: handleGenerateButtonClick,
        },
        {
            id: 'copy',
            text: 'Copy CSS to clipboard',
            icon: <IoCopy size={28} />,
            action: handleCopyButtonClick,
        },
    ]

    return (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 sm:bottom-1/2 sm:translate-y-1/2">
            <div className="flex justify-center gap-12">
                {buttons &&
                    buttons.map(({ id, text, icon, action }) => (
                        <Button id={id} key={id} text={text} onClick={action}>
                            {icon}
                        </Button>
                    ))}
            </div>
        </div>
    )
}

export default Actions
