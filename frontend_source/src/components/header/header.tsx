
import { useTheme } from '@emotion/react'
import { SchemeToggler } from '~/hooks/useColorScheme'
import { SplashHeader } from './SplashHeader'
import { ToggleTheme } from '../ToggleTheme'

import { useContext } from 'react'
import { scrollContext } from '~/hooks/useScroll'
import { classList } from '~/utilities/classlist'

import { headerStyles } from './headerStyles'
import Logo from '~/assets/logo.svg?react'
import { AnimateLayout } from '~/libs/AnimateLayout/AnimateLayout'


type HeaderProps = {
    toggleTheme: SchemeToggler
}

export const Header = ({ toggleTheme }: HeaderProps) => {
    const theme = useTheme()
    const scroll = useContext(scrollContext)
    // If scrolling up within the first page or at the very top, expand the splash screen
    const expanded = (scroll.direction.y === -1 && scroll.page.y < 1 || scroll.current.y === 0)

    return (
        <SplashHeader className={classList(expanded&&'expanded')} css={ headerStyles(theme) } height="4em">
            <a href="#top" className='logo header-item'>
                <Logo />
            </a>

            <AnimateLayout>
                <h1 className='header-item'>
                    Sean Young
                </h1>
            </AnimateLayout>

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
