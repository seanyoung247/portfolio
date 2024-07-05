
import React from "react"
import { useTheme, css } from "@emotion/react"
import { Theme } from '../theme'


const headerStyles = (theme: Theme) => css`
    position: fixed;
    z-index: 9;
    width: 100%;
    padding: 0.5em;

    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid red;

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
        <div css={{
            height: 'calc(100lvh - 4em)',
            background: theme.contentBackground,
        }}></div>
        <div css={{
            position: 'sticky',
            top: 0,
            height: '4em',
            background: theme.contentBackground,
            boxShadow: '0 5px 5px -5px black',
        }}></div>
    </>)
}