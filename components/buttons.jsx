import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Controls from '@/components/controls'
import { IoReload, IoCopy } from 'react-icons/io5'

const ReactTooltip = dynamic(() => import('react-tooltip'), {
    ssr: false,
})

const Button = ({ children, text, id }) => {
    const [tooltip, showTooltip] = useState(true)

    return (
        <>
            <button
                className="text-black transition duration-300 rounded-full p-1 hover:text-gray-700 hover:translate-y-[-5px]"
                data-tip
                data-for={id}
                onMouseEnter={() => showTooltip(true)}
                onMouseLeave={() => {
                    showTooltip(false)
                    setTimeout(() => showTooltip(true), 50)
                }}
            >
                {children}
            </button>
            {tooltip && (
                <ReactTooltip
                    place="top"
                    type="dark"
                    id={id}
                    effect="solid"
                    delayShow={500}
                >
                    {text}
                </ReactTooltip>
            )}
        </>
    )
}

const Actions = () => {
    return (
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <div className="flex justify-center gap-12">
                <Button text="Generate new gradient" id="generate">
                    <IoReload size={28} />
                </Button>
                <Button text="Copy to clipboard" id="copy">
                    <IoCopy size={28} />
                </Button>
            </div>
        </div>
    )
}

export default Actions
