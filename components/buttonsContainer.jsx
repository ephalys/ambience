import React from 'react'
import Button from '@/components/button'
import { IoReload, IoCopy } from 'react-icons/io5'

const Actions = () => {
    const buttons = [
        {
            id: 'generate',
            text: 'Generate new gradient',
            icon: <IoReload size={28} />,
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
                    buttons.map((item) => (
                        <Button id={item.id} key={item.id} text={item.text}>
                            {item.icon}
                        </Button>
                    ))}
            </div>
        </div>
    )
}

export default Actions
