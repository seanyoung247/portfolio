
import { Global, css, ThemeProvider } from '@emotion/react'
import { themes, Theme } from './theme'
import { ToggleTheme } from './components/ToggleTheme'
import { useColorScheme } from './hooks/useColorScheme'

import { SVGIcon } from './components/SVGIcon'

import Logo from './assets/logo.svg?react'
import themeIcons from './assets/theme_icons.svg'


const pageStyles = (theme: Theme) => css`
    body {
        background-color: ${theme.background};
        color: ${theme.foreground};
        font-family: ${theme.bodyFont};
    }
`

const testStyle = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 400px;
    background-color: ${theme.contentBackground};
    color: ${theme.foreground};
    box-shadow: 0 0 5px 0 ${theme.shadow};
    padding: 1em;
    border-radius: 10px;
    border-bottom: 2px solid ${theme.primaryAccent};
`

const logoStyle = (theme: Theme) => css`
    --foreground: ${theme.foreground};
    --flash: ${theme.primaryAccent};
    height: 5em;
`

const iconStyle = (theme: Theme) => css`
    fill: ${theme.foreground};
    stroke: none;
`

const App = () => {
    const [ currentTheme, toggleTheme ] = useColorScheme();

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global styles={(theme) => pageStyles(theme)} />

            <ToggleTheme toggle={toggleTheme} />
            
            <div css={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: '2em',
                gap: '1em',
            }}>
                <div css={(theme)=>testStyle(theme)} >
                    <h2>Sun Icon</h2>
                    <p>This is a test card</p>
                    <SVGIcon icons={themeIcons} name='sun' css={theme=>iconStyle(theme)} />
                </div>
                <div css={(theme)=>testStyle(theme)} >
                    <h2>Moon Icon</h2>
                    <p>This is a test card</p>
                    <SVGIcon icons={themeIcons} name='moon' css={theme=>iconStyle(theme)} />
                </div>
                <div css={(theme)=>testStyle(theme)} >
                    <h2>System Icon</h2>
                    <p>This is a test card</p>
                    <SVGIcon icons={themeIcons} name='system' css={theme=>iconStyle(theme)} />
                </div>
            </div>

            <div css={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Logo css={(theme)=>logoStyle(theme)} />
            </div>
            
        </ThemeProvider>
    )
}

export default App
