
import { useTheme, css } from "@emotion/react"
import { Theme, ThemeName } from "../theme"

type ThemeSwitcherProps = {
    currentTheme: ThemeName,
    switchTheme: (theme: ThemeName) => void
}

const styles = (theme: Theme) => css`
    background-color: ${theme.primaryAccent};
    color: ${theme.altForeground};
    padding: 0.5em;
`

export const ThemeSwitcher = ({currentTheme, switchTheme}: ThemeSwitcherProps) => {
    const theme = useTheme();
    return (
        <button 
            css={styles(theme)}
            onClick={()=>switchTheme(currentTheme)}>
            Toggle Theme
        </button>
    )
}