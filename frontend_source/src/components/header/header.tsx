
import { css, useTheme } from '@emotion/react'

import { Theme } from '../../theme'
import { SchemeToggler } from '../../hooks/useColorScheme'
import { SplashHeader } from './SplashHeader'
import { ToggleTheme } from '../ToggleTheme'

import Logo from '../../assets/logo.svg?react'


const headerStyles = (theme: Theme) => css`
    justify-content: space-evenly;
    height: 100lvh;

    .header-item {
        flex: 1 1 0;
    }

    .logo {
        --foreground: ${theme.foreground};
        --flash: ${theme.primaryAccent};
        
        width: 25lvh;
        max-width: 33%;
    }

    h1 {
        text-align: center;
        font-size: 1.5em;
    }

    .menu-items {
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;

        flex-direction: column;
    }

    .menu-item {
        font-size: 1em;
        font-weight: bold;
    }

    :not(.expanded) & {
        justify-content: flex-start; 
    }

    :not(.expanded) .logo {
        width: 3em;
    }

    :not(.expanded) #main-menu {
        margin-left: auto;
    }

    :not(.expanded) .menu-items {
       flex-direction: row;
    }
`

type HeaderProps = {
    toggleTheme: SchemeToggler
}

export const Header = ({ toggleTheme }: HeaderProps) => {
    const theme = useTheme()

    return (
        <SplashHeader css={ headerStyles(theme) }>
            <a href="#top" className='logo header-item'>
                <Logo />
            </a>
            <h1 className='header-item'>
                Sean Young
            </h1>
            <nav id="main-menu" className='header-item'>
                <ul className='menu-items'>
                    <li className='menu-item'>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className='menu-item'>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <ToggleTheme toggle={ toggleTheme } />
                    </li>
                </ul>
            </nav>
        </SplashHeader>
    )
}
