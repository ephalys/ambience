import React from 'react'
import dynamic from 'next/dynamic'
import { IoReload, IoCopy } from 'react-icons/io5'

const ReactTooltip = dynamic(() => import('@huner2/react-tooltip'), {
    ssr: false,
})

const Button = ({ children, text, id }) => {
    return (
        <>
            <button
                className="text-black transition duration-300 rounded-full p-1 hover:text-gray-700 sm:hover:translate-y-[-5px]"
                data-tip
                data-for={id}
            >
                {children}
            </button>
            <ReactTooltip
                place="top"
                type="dark"
                id={id}
                effect="solid"
                delayShow={500}
            >
                {text}
            </ReactTooltip>
        </>
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
                        <Button text={item.text} id={item.id} key={item.id}>
                            {item.icon}
                        </Button>
                    ))}
            </div>
        </div>
    )
}

export default Actions
