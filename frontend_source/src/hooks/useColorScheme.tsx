

import { useEffect, useState } from "react"
import { ThemeName } from "../theme"


export const useColorScheme = (): [ThemeName, ()=>void] => {
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