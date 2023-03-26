import React, { useEffect, useState } from 'react';
import toast, { Toaster, ToastIcon, useToasterStore } from 'react-hot-toast';
import { isMobile } from 'react-device-detect';
import ToastMessage from '@/components/toastMessage';

const Toast = () => {
    const [showToast, setShowToast] = useState(false);
    const { toasts } = useToasterStore();

    const TOAST_LIMIT = 2;

    useEffect(() => {
        toasts
            .filter((t) => t.visible) // Only consider visible toasts
            .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
            .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
    }, [toasts, TOAST_LIMIT]);

    useEffect(() => {
        if (!showToast) {
            setShowToast(true);
        }
        return () => {
            toast.remove();
        };
    }, [showToast]);

    const mobileOptions = {
        duration: 500,
        position: 'bottom-center',
        icon: '✅',
    };

    const desktopOptions = {
        duration: 800,
        position: 'bottom-center',
        icon: '✅',
    };

    return (
        <>
            {showToast && (
                <Toaster containerClassName="!bottom-32 sm:!bottom-14" toastOptions={isMobile ? mobileOptions : desktopOptions}>
                    {(t) => (
                        <span
                            className="flex items-center py-2 px-4 text-white bg-gray-400/30 rounded-lg shadow-lg transition-opacity duration-300"
                            style={{
                                opacity: t.visible ? 1 : 0,
                            }}
                        >
                            <ToastIcon toast={t} />
                            <ToastMessage messages={t.message} />
                        </span>
                    )}
                </Toaster>
            )}
        </>
    );
};

export default Toast;
