
import { css } from '@emotion/react'
import { Theme } from '../../theme'


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
        /* --flash: ${theme.primaryAccent}; */
        --flash: ${theme.foreground};

        order: 2;
        width: 25lvh;
        max-width: 33%;
    }

    h1 {
        order: 1;
        font-size: clamp(2em, 8vw, 6em);
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

    .menu-item {
        font-size: 1.5em;
    }

    .menu-item > a {
        text-decoration: none;
    }

    /* Menubar styles */

    :not(.expanded) & {
        justify-content: flex-start; 
        height: 4em;
    }

    :not(.expanded) .header-item {
        flex: 0 0 auto;
    }

    :not(.expanded) .logo {
        order: 0;
        flex: 0 0 3em;
    }

    :not(.expanded) h1 {
        font-size: 1.5em;
    }

    :not(.expanded) #main-menu {
        margin-left: auto;
    }

    :not(.expanded) .menu-items {
       flex-direction: row;
    }

    :not(.expanded) .menu-item {
        font-size: 1em;
    }
`