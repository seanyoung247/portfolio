
import { useState } from 'react'
import { Global, css, ThemeProvider } from '@emotion/react'
import themes, { ThemeName, Theme } from './theme'


const pageStyles = (theme: Theme) => css`
    body {
        background-color: ${theme.background};
        color: ${theme.foreground};
    }
`

const testStyle = (theme: Theme) => ({
    width: 'auto',
    backgroundColor: theme.contentBackground,
    color: theme.foreground,
    padding: '1em',
    margin: '2em',
    borderRadius: '10px',
    borderBottom: `1px solid ${theme.primaryAccent}`
})

const App = () => {
    const [currentTheme, setCurrentTheme] = useState<ThemeName>(ThemeName.light)

    const toggleTheme = (theme: ThemeName) => setCurrentTheme(theme === ThemeName.light ? ThemeName.dark : ThemeName.light)

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global styles={(theme) => pageStyles(theme)} />

            <button onClick={()=>toggleTheme(currentTheme)}>Toggle Theme</button>

            <div css={(theme)=>testStyle(theme)} >
                <h2>Test Card</h2>
                <p>This is a test card</p>
            </div>

        </ThemeProvider>
    )
}

export default App
