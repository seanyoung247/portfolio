
import { Global, css, ThemeProvider } from '@emotion/react'
import { themes, Theme } from './theme'
import { ToggleTheme } from './components/ToggleTheme'
import { useColorScheme } from './hooks/useColorScheme'
import { SplashHeader } from './components/header/SplashHeader'

import Logo from './assets/logo.svg?react'
import { Header } from './components/header/header'


const pageStyles = (theme: Theme) => css`
    * {
        scrollbar-color: ${theme.foreground} ${theme.contentBackground};
    }
    html, body {
        background-color: ${theme.background};
        color: ${theme.foreground};
        font-family: ${theme.bodyFont};
        scroll-behavior: smooth;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.titleFont};
    }
    a, a:visited {
        color: ${theme.foreground};
        
    }
`

const App = () => {
    const [ currentTheme, toggleTheme ] = useColorScheme();
    const theme = themes[currentTheme]

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global styles={ pageStyles(theme) } />

            <Header toggleTheme={ toggleTheme } />

            <main css={{
                'section:nth-of-type(odd)': {
                    backgroundColor: theme.background,
                },
                'section:nth-of-type(even)': {
                    backgroundColor: theme.altBackground,
                }
            }}>
                <section id="about" css={{
                    minHeight: '100lvh',
                    paddingTop: '5em',
                }}>
                    <h2>About</h2>
                </section>
                <section id="projects" css={{
                    minHeight: '100lvh',
                    paddingTop: '5em',
                }}>
                    <h2>Projects</h2>
                </section>
                <section id="contact" css={{
                    minHeight: '100lvh',
                    paddingTop: '5em',
                }}>
                    <h2>Contact</h2>
                </section>
            </main>
            
        </ThemeProvider>
    )
}

export default App
