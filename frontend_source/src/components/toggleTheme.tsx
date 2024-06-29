
import { useTheme, css } from "@emotion/react"
import { Theme } from "../theme"

type ToggleThemeProps = {
    // currentTheme: ThemeName,
    // switchTheme: (theme: ThemeName) => void
    toggleTheme: () => void
}

const styles = (theme: Theme) => css`
    background-color: ${theme.primaryAccent};
    color: ${theme.altForeground};
    padding: 0.5em;
`

export const ToggleTheme = ({toggleTheme}: ToggleThemeProps) => {
    const theme = useTheme();
    return (
        <button 
            css={styles(theme)}
            onClick={()=>toggleTheme()}>
            Toggle Theme
        </button>
    )
}