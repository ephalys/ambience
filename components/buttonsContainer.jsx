import React, { useContext } from 'react'
import Button from '@/components/button'
import { BackgroundsContext } from 'contexts/backgrounds'
import { IoReload, IoCopy } from 'react-icons/io5'
import { generateNewBackgroundsArray } from '@/utils/generateBackground'

const Actions = () => {
    const { backgrounds, setBackgrounds } = useContext(BackgroundsContext)

    const handleGenerateClick = () => {
        const newBackgroundsArray = generateNewBackgroundsArray(backgrounds)

        setBackgrounds(newBackgroundsArray)
    }

    const buttons = [
        {
            id: 'generate',
            text: 'Generate new gradient',
            icon: <IoReload size={28} />,
            action: handleGenerateClick,
        },
        {
            id: 'copy',
            text: 'Copy to clipboard',
            icon: <IoCopy size={28} />,
        },
    ]

    return (
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
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
