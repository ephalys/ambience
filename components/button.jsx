import React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

const Button = ({ children, text, ...rest }) => {
    return (
        <Tooltip.Root delayDuration={800}>
            <Tooltip.Trigger asChild>
                <button
                    className="text-black transition duration-300 rounded-full p-1 pt-2 hover:text-gray-700"
                    data-tip={text}
                    data-for="tooltip"
                    {...rest}
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

export default Button
