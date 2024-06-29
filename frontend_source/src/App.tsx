
import { Global, css, ThemeProvider } from '@emotion/react'
import { themes, Theme } from './theme'
import { ToggleTheme } from './components/toggleTheme'
import { useColorScheme } from './hooks/useColorScheme'


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

const App = () => {
    const [ currentTheme, toggleTheme ] = useColorScheme();

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global styles={(theme) => pageStyles(theme)} />

            <ToggleTheme toggleTheme={toggleTheme} />
            
            <div css={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: '2em',
                gap: '1em',
            }}>
                <div css={(theme)=>testStyle(theme)} >
                    <h2>Test Card</h2>
                    <p>This is a test card</p>
                </div>
                <div css={(theme)=>testStyle(theme)} >
                    <h2>Test Card</h2>
                    <p>This is a test card</p>
                </div>
            </div>

        </ThemeProvider>
    )
}

export default App
