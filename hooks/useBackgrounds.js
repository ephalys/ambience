// Settings Hook - src/hooks/useSettings
import { useContext } from 'react'
import { BackgroundsContext } from '@/contexts/backgrounds'

export const useBackground = () => {
    const context = useContext(BackgroundsContext)

    return context
}

export default useBackground
