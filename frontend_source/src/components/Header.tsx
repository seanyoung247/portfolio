
import React from "react"
import { useTheme, css } from "@emotion/react"
import { Theme } from '../theme'


const headerStyles = (theme: Theme) => css`
    position: fixed;
    width: 100%;
    padding: 0.5em;

    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;

    background-color: ${theme.contentBackground};
    box-shadow: 0 0 5px ${theme.shadow};
    font-family: ${theme.titleFont};
`

type HeaderProps = {
    className?: string,
    children: React.ReactNode,
}

export const Header = ({className, children}: HeaderProps) => {
    const theme = useTheme()
    return (<>
        <header className={ className } css={ headerStyles(theme) }>
            { children }
        </header>
        <div></div>
    </>)
}