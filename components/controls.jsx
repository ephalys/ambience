import React from 'react'
import { IoArrowForwardOutline, IoArrowBackOutline } from 'react-icons/io5'
import { TbSpace } from 'react-icons/tb'

const Controls = () => {
    return (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex justify-center mt-6 gap-6 w-full">
            <div className="flex items-center my-1">
                <div className="flex items-center justify-center w-12 h-6 bg-black text-white rounded-lg mr-2">
                    c
                </div>
                Copy to clipboard
            </div>
            <div className="flex items-center my-1">
                <div className="flex items-center justify-center w-12 h-6 bg-black text-white rounded-lg mr-2">
                    <TbSpace />
                </div>
                Generate new gradient
            </div>
            <div className="flex items-center my-1">
                <div className="flex items-center justify-center w-12 h-6 bg-black text-white rounded-lg mr-2">
                    <IoArrowBackOutline /> <IoArrowForwardOutline />
                </div>
                Navigate
            </div>
        </div>
    )
}

export default Controls
