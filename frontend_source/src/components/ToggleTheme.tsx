
import { useTheme, css } from "@emotion/react"
import { Theme } from "../theme"

import { SVGIcon } from './SVGIcon'

import themeIcons from '../assets/theme_icons.svg'
import { Fragment, useState } from "react"
import { SchemeToggler } from "../hooks/useColorScheme"


const themedStyles = (theme: Theme) => css`
    --item-size: 1.5rem;
    --icon-ratio: 0.8;
    --padding: 0.1rem;

    display: inline-flex;
    position: relative;
    padding: var(--padding);
    block-size: fit-content;
    width: auto;

    border: 1px solid ${theme.primaryAccent};
    border-radius: calc((var(--item-size) / 2) + var(--padding)) / 50%;
    background-color: ${theme.background};
    box-shadow: inset 0 0 0.1rem 0.05rem ${theme.shadow};

    input { display: none; }

    label {
        display: flex;
        width: var(--item-size);
        height: var(--item-size);
        justify-content: center;
        align-items: center;
    }

    svg {
        position: relative;
        z-index: 2;
        width: calc(var(--item-size) * var(--icon-ratio));
        aspect-ratio: 1;
        stroke: none;
        fill:  ${theme.foreground};
    }

    input:checked + label > svg {
        fill: ${theme.altForeground};
        transition: 0.1s 0.05s fill;
    }

    .toggle {
        position: absolute;
        width: var(--item-size);
        aspect-ratio: 1;
        background: ${theme.primaryAccent};
        border-radius: 50%;

        top: var(--padding);
        left: var(--padding);

        translate: calc(100% * var(--selected, 0));
        transition: 0.15s translate;
    }
`

const options = Object.freeze([
    { name: 'light', icon: 'sun', description: 'Light theme'}, 
    { name: 'dark', icon: 'moon', description: 'Dark theme' }, 
    { name: 'auto', icon: 'system', description: 'System default theme' }
])

type ToggleThemeProps = {
    className?: string,
    toggle: SchemeToggler,
}

export const ToggleTheme = ({ className, toggle }: ToggleThemeProps) => {
    const theme = useTheme()
    const styles = themedStyles(theme)
    const stored = localStorage.getItem('colorScheme')
    const [selected, setSelected] = useState(
        stored ? options.findIndex(option => option.name === stored) : options.length - 1
    )

    const onToggle = ( themeName: string, index: number ) => {
        toggle(themeName)
        setSelected(index)
    }

    return (
        <fieldset 
            aria-label="Switch theme"
            css={ styles } 
            className={ className } 
            style={ {'--selected': selected} }
        >

            { options.map( (option, index) => (
                <Fragment key={ option.name }>
                    <input
                        id={ option.name }
                        name="theme-select" 
                        type="radio" 
                        value={ option.name }
                        onChange={ () => onToggle(option.name, index) }
                        defaultChecked={ selected === index }
                        aria-label={ option.description }
                    />
                    <label htmlFor={option.name}>
                        <SVGIcon icons={ themeIcons } name={ option.icon } />
                    </label>
                </Fragment>
            )) }

            <span className="toggle" />
        </fieldset>
    )
}
