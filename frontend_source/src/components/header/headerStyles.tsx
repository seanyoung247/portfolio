
import { css } from '@emotion/react'
import { Theme } from '~/theme'


export const headerStyles = (theme: Theme) => css`
    /* Splash screen and base styles */
    &.expanded {
        justify-content: space-evenly;
        height: 100lvh;
    }

    .header-item {
        flex: 1 1 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        --foreground: ${theme.foreground};
        --flash: ${theme.foreground};

        order: 2;
        width: 25lvh;
        max-width: 33%;
    }

    h1 {
        order: 1;
        font-size: clamp(2em, 8vw, 6em);
        padding: 0;
    }

    #main-menu {
        order: 3;
    }

    .menu-items {
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        flex-direction: column;
    }

    .menu-item > a {
        font-size: 1.5em;
        position: relative;
        text-decoration: none;
    }

    .menu-item > a::after {
        content: '';
        position: absolute;
        top: 100%; left: 0;
        width: 100%; height: 2px;
    
        background:
            linear-gradient(${theme.foreground}, ${theme.foreground}) 
                no-repeat top center / 0% 100%;
        transition: background 0.25s;
    }
    .menu-item > a:hover::after {
        content: '';
        background:
            linear-gradient(${theme.foreground}, ${theme.foreground}) 
                no-repeat top center / 100% 100%;
    }

    /* Menubar styles */
    :not(.expanded) {

        & {
            justify-content: flex-start; 
            height: 4em;
        }

        .header-item {
            flex: 0 0 auto;
        }

        .logo {
            order: 0;
            flex: 0 0 3em;
        }

        h1 {
            font-size: 1.5em;
        }

        #main-menu {
            margin-left: auto;
        }
        .menu-items {
            flex-direction: row;
        }
        .menu-item > a {
            font-size: 1em;
        }

    }
`