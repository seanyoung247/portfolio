
import { useTheme, css } from "@emotion/react"
import { Theme } from '../theme'
import { ToggleTheme } from './ToggleTheme'
import Logo from '../assets/logo.svg?react'
import { SchemeToggler } from "../hooks/useColorScheme"

type HeaderProps = {
    toggleTheme: SchemeToggler
}

const headerStyles = (theme: Theme) => css`
    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: ${theme.contentBackground};
    box-shadow: 0 0 5px ${theme.shadow};
    padding: 0.5em;

    font-family: ${theme.titleFont};

    .logo {
        --foreground: ${theme.foreground};
        --flash: ${theme.primaryAccent};
        width: 48px;
    }

    h1 {
        font-family: ${theme.titleFont};
    }
`

export const Header = ({ toggleTheme }: HeaderProps) => {
    const theme = useTheme()
    return (<>
        <header css={ headerStyles(theme) }>
            <Logo className='logo'/>
            <h1>Sean Young</h1>
            About
            Work
            Contact
            <ToggleTheme toggle={ toggleTheme } />
        </header>
        <div></div>
    </>)
}