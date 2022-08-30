import React from 'react'
import Image from 'next/image'

const Credits = () => {
    return (
        <div className="absolute inset-x-0 bottom-4 flex justify-center sm:text-xs text-gray-700">
            Crafted by
            <a
                href="https://www.tranvanleon.com"
                className="flex items-center justify-center rounded-full ml-0.5 px-1 transition-all duration-300 hover:bg-gray-400/40 hover:text-black"
            >
                <Image
                    className="rounded-full"
                    src={`/tranvanleon.png`}
                    width={18}
                    height={18}
                    quality={100}
                    alt="Léon Tran-Van"
                />
                <span className="font-semibold ml-1">Léon Tran-Van</span>
            </a>
        </div>
    )
}

export default Credits
