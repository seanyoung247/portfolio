
import React, { useState } from "react"
import { useTheme, css } from "@emotion/react"
import { Theme } from '../../theme'
import { classList } from "../../utilities/classlist"


const headerStyles = (theme: Theme) => css`
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 4em;
    padding: 0.5em;

    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;

    font-family: ${theme.titleFont};

    &.expanded {
        flex-direction: column;
    }
`

type SplashHeaderProps = {
    className?: string,
    children: React.ReactNode,
}

export const SplashHeader = ({className, children}: SplashHeaderProps) => {
    const theme = useTheme()
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <header className={ classList( className, expanded&&' expanded' ) } css={ headerStyles(theme) }>
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
            <button css={{
                position: 'fixed',
                top: 0,
                zIndex: 99,
            }}
            onClick={()=>setExpanded(!expanded)}>
                Test
            </button>
        </>
    )
}