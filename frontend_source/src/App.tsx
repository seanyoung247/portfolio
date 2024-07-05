
import { Global, css, ThemeProvider } from '@emotion/react'
import { themes, Theme } from './theme'
import { ToggleTheme } from './components/ToggleTheme'
import { useColorScheme } from './hooks/useColorScheme'
import { Header } from './components/Header'

import Logo from './assets/logo.svg?react'


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
    a:visited {
        color: ${theme.foreground};
    }
`

const headerStyles = (theme: Theme) => css`
    justify-content: flex-start;


    .logo {
        --foreground: ${theme.foreground};
        --flash: ${theme.primaryAccent};
        width: 3em;
    }

    h1 {
        text-align: center;
        font-size: 1.5em;
    }

    nav {
        margin-left: auto;
    }

    nav > ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        gap: 2em;
    }

    nav > ul > li {
        font-size: 1em;
        font-weight: bold;
    }
`

const App = () => {
    const [ currentTheme, toggleTheme ] = useColorScheme();
    const theme = themes[currentTheme]

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global styles={ pageStyles(theme) } />

            <Header css={ headerStyles(theme) }>
                <a href="#top" className='logo'><Logo /></a>
                <h1>Sean Young</h1>
                <nav id="main-menu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><ToggleTheme toggle={ toggleTheme } /></li>
                    </ul>
                </nav>
            </Header>

            <main css={{
                'section:nth-child(odd)': {
                    backgroundColor: theme.background,
                },
                'section:nth-child(even)': {
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
