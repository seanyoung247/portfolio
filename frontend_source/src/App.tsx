
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
    body {
        background-color: ${theme.background};
        color: ${theme.foreground};
        font-family: ${theme.bodyFont};
    }
`

const headerStyles = (theme: Theme) => css`
    /* flex: 1 1 0px; */
    justify-content: flex-start;

    & > * {
        /* border-left: 1px solid red;
        border-right: 1px solid red; */
        /* flex: 1 1 0; */
    }

    .logo {
        --foreground: ${theme.foreground};
        --flash: ${theme.primaryAccent};
        width: 48px;
    }

    h1 {
        text-align: center;
        font-family: ${theme.titleFont};
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
`

const App = () => {
    const [ currentTheme, toggleTheme ] = useColorScheme();
    const theme = themes[currentTheme]

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global styles={ pageStyles(theme) } />

            <Header css={ headerStyles(theme) }>
                <a href="#top"><Logo className='logo'/></a>
                <h1>Sean Young</h1>
                <nav id="main-menu">
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Work</a></li>
                        <li><a>Contact</a></li>
                        <li><ToggleTheme toggle={ toggleTheme } /></li>
                    </ul>
                </nav>
            </Header>

            <div css={{
                height: '500vh',
                background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
            }} />
            
        </ThemeProvider>
    )
}

export default App
