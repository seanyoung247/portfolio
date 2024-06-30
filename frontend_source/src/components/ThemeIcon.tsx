
import themeIcons from '../assets/theme_icons.svg'

export const ThemeIcon = (props:{name: string}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{'fill':'none','stroke':'black'}}
    >
        <use href={`${themeIcons}#${props.name}`} />
    </svg>
)