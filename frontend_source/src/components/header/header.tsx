
import { useTheme } from '@emotion/react'

import { SchemeToggler } from '../../hooks/useColorScheme'
import { SplashHeader } from './SplashHeader'
import { ToggleTheme } from '../ToggleTheme'

import Logo from '../../assets/logo.svg?react'
import { headerStyles } from './headerStyles'


type HeaderProps = {
    toggleTheme: SchemeToggler
}

export const Header = ({ toggleTheme }: HeaderProps) => {
    const theme = useTheme()

    return (
        <SplashHeader css={ headerStyles(theme) } height="4em">
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
