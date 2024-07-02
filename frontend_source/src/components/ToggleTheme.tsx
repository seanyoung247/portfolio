
import { useTheme, css } from "@emotion/react"
import { Theme } from "../theme"

import { SVGIcon } from './SVGIcon'

import themeIcons from '../assets/theme_icons.svg'
import { Fragment, useState } from "react"
import { SchemeToggler } from "../hooks/useColorScheme"


type ToggleThemeProps = {
    toggle: SchemeToggler,
}

const themedStyles = (theme: Theme) => css`
    --item-size: 1.5em;
    --icon-ratio: 0.8;
    --padding: 0.1em;

    display: inline-flex;
    position: absolute;
    top: 0.5em; right: 0.5em;
    width: auto;

    border: 1px solid ${theme.primaryAccent};
    border-radius: calc((var(--item-size) / 2) + var(--padding)) / 50%;
    background-color: ${theme.background};

    padding: var(--padding);

    input {
        display: none;
    }

    label {
        display: flex;
        width: var(--item-size);
        aspect-ratio: 1;
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
        /* display: flex; */
        position: absolute;
        /* justify-content: center;
        align-items: center; */
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
    { name: 'light', icon: 'sun' }, 
    { name: 'dark', icon: 'moon' }, 
    { name: 'auto', icon: 'system' }
])

export const ToggleTheme = ({ toggle }: ToggleThemeProps) => {
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
        <fieldset css={styles} style={{'--selected': selected}}>

            { options.map( (option, index) => (
                <Fragment key={option.name}>
                    <input
                        id={option.name}
                        name="theme-select" 
                        type="radio" 
                        value={option.name}
                        onChange={ () => onToggle(option.name, index) }
                        defaultChecked={selected === index} 
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
