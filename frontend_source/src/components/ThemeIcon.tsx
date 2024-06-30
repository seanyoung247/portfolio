
import { useTheme } from '@emotion/react'
import themeIcons from '../assets/theme_icons.svg'

export const ThemeIcon = (props:{name: string}) => {
    const theme = useTheme()

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                'fill': 'none',
                'stroke': theme.foreground
            }}
        >
            <use href={`${themeIcons}#${props.name}`} />
        </svg>
    )
}