
import { useTheme, css } from "@emotion/react"
import { Theme } from "../theme"

import { SVGIcon } from './SVGIcon'

import themeIcons from '../assets/theme_icons.svg'
import { Fragment, useState } from "react"


type ToggleThemeProps = {
    toggleTheme: (theme: string)=>void,
}

const themedStyles = (theme: Theme) => css`
    --item-size: 1.5em;
    --item-padding: 0.1em;

    display: inline-flex;
    position: absolute;
    top: 0.5em; right: 0.5em;
    width: auto;

    border: 1px solid ${theme.primaryAccent};
    border-radius: calc((var(--item-size) / 2) + var(--item-padding)) / 50%;
    background-color: ${theme.contentBackground};

    padding: var(--item-padding);

    input {
        display: none;
    }

    svg {
        position: relative;
        z-index: 2;
        width: var(--item-size);
        aspect-ratio: 1;
        stroke: ${theme.foreground};
        fill: none;
    }

    input:checked + label > svg {
        stroke: ${theme.altForeground};
        transition: 0.1s 0.15s stroke;
    }

    .toggle {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: var(--item-size);
        aspect-ratio: 1;
        background: ${theme.primaryAccent};
        border-radius: 50%;

        top: var(--item-padding);
        left: var(--item-padding);

        translate: calc(100% * var(--selected, 0));
        transition: 0.25s translate;
    }
`

const options = Object.freeze([
    { name: 'light', icon: 'sun' }, 
    { name: 'dark', icon: 'moon' }, 
    { name: 'auto', icon: 'system' }
])

export const ToggleTheme = ({ toggleTheme }: ToggleThemeProps) => {
    const theme = useTheme()
    const styles = themedStyles(theme)
    const stored = localStorage.getItem('colorScheme')
    const [selected, setSelected] = useState(
        stored ? options.findIndex(option => option.name === stored) : options.length - 1
    )

    const onToggle = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        toggleTheme(e.target.value)
        setSelected(parseInt(e.target.dataset.index as string))
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
                        data-index={index}
                        onChange={ onToggle }
                        defaultChecked={
                            options[selected].name === option.name
                        } 
                    />
                    <label htmlFor={option.name}>
                        <SVGIcon icons={themeIcons} name={ option.icon } />
                    </label>
                </Fragment>
            )) }

            <span className="toggle" />
        </fieldset>
    )
}
