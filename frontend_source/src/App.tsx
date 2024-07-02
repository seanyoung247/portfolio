
import { Global, css, ThemeProvider } from '@emotion/react'
import { themes, Theme } from './theme'
import { useColorScheme } from './hooks/useColorScheme'
import { Header } from './components/Header'


const pageStyles = (theme: Theme) => css`
    * {
        scrollbar-color: ${theme.foreground} ${theme.contentBackground};
    }
    body {
        background-color: ${theme.background};
        color: ${theme.foreground};
        font-family: ${theme.bodyFont};
        
    }
`

const App = () => {
    const [ currentTheme, toggleTheme ] = useColorScheme();

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global styles={(theme) => pageStyles(theme)} />
            <Header toggleTheme={ toggleTheme } />
            <div css={{
                height: '500vh'
            }} >

            </div>
            
        </ThemeProvider>
    )
}

export default App
