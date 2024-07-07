
import React from "react"
import { useTheme, css } from "@emotion/react"
import { Theme } from '~/theme'


const headerStyles = (theme: Theme, height: string) => css`
    position: fixed;
    z-index: 9;
    width: 100%;
    height: ${height};
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
    height?: string,
}

/**
 * Renders a component that switches between a full height splash screen and a navbar.
 * @param props
 *  @param props.className 
 *  @param props.children
 *  @param props.height 
 * @returns Splash screen/Header component
 */
export const SplashHeader = ({className, children, height='4em'}: SplashHeaderProps) => {
    const theme = useTheme()

    return (
        <>
            <header 
                className={ className }
                css={ headerStyles(theme, height) }
            >

                { children }

            </header>
            <div css={{
                height: `calc(100lvh - ${height} + 1px)`,
                marginBottom: '-1px',
                background: theme.contentBackground,
            }} />
            <div css={{
                position: 'sticky',
                top: 0,
                height: height,
                background: theme.contentBackground,
                boxShadow: `0 5px 5px -5px ${theme.shadow}`,
            }} />

        </>
    )
}