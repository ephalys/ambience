import React from 'react'
import { IoReload, IoCopy } from 'react-icons/io5'
import * as Tooltip from '@radix-ui/react-tooltip'

const Button = ({ children, text }) => {
    return (
        <Tooltip.Root delayDuration={800}>
            <Tooltip.Trigger asChild>
                <button
                    className="text-black transition duration-300 rounded-full p-1 pt-2 hover:text-gray-700"
                    data-tip={text}
                    data-for="tooltip"
                >
                    {children}
                </button>
            </Tooltip.Trigger>
            <Tooltip.Content className="bg-black text-white text-sm rounded-lg py-1 px-3 shadow-lg backdrop-blur-sm">
                {text}
                <Tooltip.Arrow />
            </Tooltip.Content>
        </Tooltip.Root>
    )
}

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
