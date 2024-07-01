

import { useEffect, useState } from "react"
import { ThemeName } from "../theme"


export const useColorSchemeOld = (): [ThemeName, ()=>void] => {
    const [currentColorScheme, setCurrentColorScheme] = useState<ThemeName>(() => (
        window.matchMedia('(prefers-color-scheme: dark)').matches ?
            ThemeName.dark : 
            ThemeName.light
    )) 

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => (
            setCurrentColorScheme(
                mediaQuery.matches ? 
                    ThemeName.dark : 
                    ThemeName.light
            )
        )

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const toggleColorScheme = () => {
        const newColorScheme = currentColorScheme === ThemeName.dark ? ThemeName.light : ThemeName.dark
        setCurrentColorScheme(newColorScheme)
    }

    return [ currentColorScheme, toggleColorScheme ]
}

const mQ = window.matchMedia('(prefers-color-scheme: dark)')

const getColorScheme = (mediaQuery = mQ):ThemeName => (
    // Follow the system color scheme unless there's a saved preference
    localStorage.getItem('colorScheme') as ThemeName ??
        mediaQuery.matches ? ThemeName.dark : ThemeName.light
)

export const useColorScheme = (): [ ThemeName, (scheme:string)=>void ] => {

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