import React from 'react'
import { IoArrowForwardOutline, IoArrowBackOutline } from 'react-icons/io5'
import { TbSpace } from 'react-icons/tb'
import useBackgrounds from 'hooks/useBackgrounds'
import { useKeyDown } from 'hooks/useKeyDown'

const Controls = () => {
    const context = useBackgrounds()
    useKeyDown(context)

    const CONTROLS = [
        {
            text: 'Copy CSS to clipboard',
            shortcut: 'c',
        },
        {
            text: 'Generate new Gradient',
            shortcut: <TbSpace />,
        },
        {
            text: 'Navigate',
            shortcut: (
                <>
                    <IoArrowBackOutline /> <IoArrowForwardOutline />
                </>
            ),
        },
    ]

    return (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex justify-center mt-6 gap-6 w-full">
            {CONTROLS &&
                CONTROLS.map((item, i) => (
                    <div className="flex items-center my-1  text-sm" key={i}>
                        <div className="flex items-center justify-center w-12 h-6 bg-black text-white rounded-lg mr-2">
                            {item.shortcut}
                        </div>
                        {item.text}
                    </div>
                ))}
        </div>
    )
}

export default Controls
