import React, { useEffect, useState } from 'react'
import toast, {
    Toaster,
    ToastIcon,
    resolveValue,
    useToasterStore,
} from 'react-hot-toast'
import { isMobile } from 'react-device-detect'

const Toast = () => {
    const [showToast, setShowToast] = useState(false)
    const { toasts } = useToasterStore()

    const TOAST_LIMIT = isMobile ? 2 : 4

    useEffect(() => {
        toasts
            .filter((t) => t.visible) // Only consider visible toasts
            .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
            .forEach((t) => toast.dismiss(t.id)) // Dismiss – Use toast.remove(t.id) for no exit animation
    }, [toasts, TOAST_LIMIT])

    useEffect(() => {
        if (!showToast) {
            setShowToast(true)
        }
        return () => {
            toast.remove()
        }
    }, [showToast])

    const mobileOptions = {
        duration: 500,
        position: 'bottom-center',
        icon: '✅',
    }

    const desktopOptions = {
        duration: 800,
        position: 'top-right',
        icon: '✅',
    }

    return (
        <>
            {showToast && (
                <Toaster
                    containerClassName=" !bottom-1/2 sm:!inset-y-8"
                    toastOptions={isMobile ? mobileOptions : desktopOptions}
                >
                    {(t) => (
                        <span
                            className="flex py-2 px-4 text-white bg-black rounded-full shadow-lg transition-opacity duration-300"
                            style={{
                                opacity: t.visible ? 1 : 0,
                            }}
                        >
                            <ToastIcon toast={t} />
                            <p className="px-2">{resolveValue(t.message)}</p>
                        </span>
                    )}
                </Toaster>
            )}
        </>
    )
}

export default Toast
