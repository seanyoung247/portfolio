
import { useTheme } from '@emotion/react'
import { SchemeToggler } from '~/hooks/useColorScheme'
import { SplashHeader } from './SplashHeader'
import { ToggleTheme } from '../ToggleTheme'

import { useContext } from 'react'
import { scrollContext } from '~/hooks/useScroll'
import { classList } from '~/utilities/classlist'

import { combineKeyframes, animations } from '~/libs/animationlayout/animation'
import { AnimateLayout } from '~/libs/animationlayout/AnimateLayout'

import { headerStyles } from './headerStyles'
import Logo from '~/assets/logo.svg?react'
import { clamp } from '~/utilities/clamp'


type HeaderProps = {
    toggleTheme: SchemeToggler
}

export const Header = ({ toggleTheme }: HeaderProps) => {
    const theme = useTheme()
    const scroll = useContext(scrollContext)

    // If scrolling up within the first page or at the very top, expand the splash screen
    const expanded = (scroll.direction.y === -1 && scroll.page.y < 1 || scroll.current.y === 0)
    const pagesPercentage = clamp(0, expanded ? (1 - scroll.page.y) * 100 : (scroll.page.y * 100), 100)

    // Layout animation
    const keyframes = combineKeyframes(
        animations.scale.both, 
        expanded ? animations.translate.cornerHtoV : animations.translate.cornerVtoH
    )
    const options = {
        duration: 100,
        playbackRate:0
    }

    return (
        <SplashHeader className={classList(expanded&&'expanded')} css={ headerStyles(theme) } height="4em">
            
            <a href="#top" className='logo header-item'>
                <AnimateLayout keyframes={ keyframes } position={pagesPercentage} options={ options }>
                    <span style={{width:'100%'}}><Logo /></span>
                </AnimateLayout>
            </a>
            <h1 className='header-item'>
                <AnimateLayout keyframes={ keyframes } position={pagesPercentage} options={ options }>
                    <span>Sean Young</span>
                </AnimateLayout>
            </h1>

            <nav id="main-menu" className='header-item'>
                <ul className='menu-items'>
                    <AnimateLayout keyframes={ keyframes } position={pagesPercentage} options={ options }>
                        <li className='menu-item'>
                            <a href="#about" className='nav-link'>
                                About
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a href="#projects" className='nav-link'>
                                Projects
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a href="#contact" className='nav-link'>
                                Contact
                            </a>
                        </li>
                        <li className='menu-item'>
                            <ToggleTheme toggle={ toggleTheme } />
                        </li>
                    </AnimateLayout>
                </ul>
            </nav>
        </SplashHeader>
    )
}
