
import { useEffect, useState } from "react"
import { ThemeName } from "../theme"


const mQ = window.matchMedia('(prefers-color-scheme: dark)')
const getColorScheme = (mediaQuery = mQ):ThemeName => {
    const storedScheme = localStorage.getItem('colorScheme')
    const systemScheme = mediaQuery.matches ? ThemeName.dark : ThemeName.light
    return storedScheme ? storedScheme as ThemeName : systemScheme
}

export type SchemeToggler = (scheme:string)=>void

export const useColorScheme = (): [ ThemeName, SchemeToggler ] => {
    const [
        currentColorScheme, 
        setCurrentColorScheme
    ] = useState<ThemeName>( getColorScheme() )

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => setCurrentColorScheme(getColorScheme(mediaQuery))

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const toggleColorScheme = (scheme: string) => {

        if (scheme === 'auto') {
            localStorage.removeItem('colorScheme')
            setCurrentColorScheme(getColorScheme())
        } else {
            localStorage.setItem('colorScheme', scheme)
            setCurrentColorScheme(scheme as ThemeName)
        }

    }

    return [ currentColorScheme, toggleColorScheme ]
}