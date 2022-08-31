import React, { useEffect, useState } from 'react'
import toast, { Toaster, ToastIcon, resolveValue } from 'react-hot-toast'

const Toast = () => {
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        if (!showToast) {
            setShowToast(true)
        }
        return () => {
            toast.remove()
        }
    }, [showToast])

    return (
        <>
            {showToast && (
                <Toaster
                    containerClassName="!inset-y-8"
                    toastOptions={{
                        duration: 1000,
                        position: 'top-right',
                        icon: '✅',
                    }}
                >
                    {(t) => {
                        console.log(t)
                        return (
                            <span
                                className="flex py-2 px-4 text-white bg-black rounded-full shadow-lg transition-opacity duration-300"
                                style={{
                                    opacity: t.visible ? 1 : 0,
                                }}
                            >
                                <ToastIcon toast={t} />
                                <p className="px-2">
                                    {resolveValue(t.message)}
                                </p>
                            </span>
                        )
                    }}
                </Toaster>
            )}
        </>
    )
}

export default Toast
