
import { useTheme, css } from "@emotion/react"
import { Theme } from "../theme"

import { SVGIcon } from './components/SVGIcon'

import themeIcons from './assets/theme_icons.svg'
import { useRef } from "react"

type ToggleThemeProps = {
    toggleTheme: (theme: string)=>void,
}

const styles = (theme: Theme) => css`
    background-color: ${theme.primaryAccent};
    color: ${theme.altForeground};
    padding: 0.5em;
`

const options = [
    { value: 'light', icon: 'sun' }, 
    { value: 'dark', icon: 'moon' }, 
    { value: 'auto', icon: 'system' }
]

const testSetting = (setting): string => {
    if (setting.current === 'light') setting.current = 'dark'
    else if (setting.current === 'dark') setting.current = 'auto'
    else if (setting.current === 'auto') setting.current = 'light'

    console.log(setting.current)
    return setting.current
}

export const ToggleTheme = ({ toggleTheme }: ToggleThemeProps) => {
    const theme = useTheme();
    const setting = useRef('auto')
    return (
        <button 
            css={styles(theme)}
            onClick={()=>toggleTheme(testSetting(setting))}>
            Toggle Theme ({setting.current})
        </button>
    )
}