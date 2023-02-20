import React from 'react';
import { IoArrowForwardOutline, IoArrowBackOutline } from 'react-icons/io5';
import { TbSpace } from 'react-icons/tb';
import useBackgrounds from 'hooks/useBackgrounds';
import { useKeyDown } from 'hooks/useKeyDown';

const Controls = () => {
    const context = useBackgrounds();
    useKeyDown(context);

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
    ];

    return (
        <div className="hidden sm:flex justify-center mt-12 gap-6 w-full bg-gray-400/30 rounded-lg max-w-2xl px-6 py-4 mx-auto">
            {CONTROLS &&
                CONTROLS.map((item, i) => (
                    <div
                        className="flex items-center my-1 text-sm text-black"
                        key={i}
                    >
                        <div className="flex items-center justify-center w-12 h-6 bg-gray-200 text-black rounded-lg mr-2">
                            {item.shortcut}
                        </div>
                        {item.text}
                    </div>
                ))}
        </div>
    );
};

export default Controls;
