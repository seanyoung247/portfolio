
type SVGIconProps = {
    icons: string, 
    name: string, 
    className?: string
}

/**
 * Renders a single icon from an SVG sprite
 * @param {string} icons - The url of the SVG sprite file
 * @param {string} name - The id name of the icon
 * @param {string} className - Class to apply
 * @returns {ReactNode} A React element that renders an SVG icon
 */
export const SVGIcon = (props: SVGIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={props?.className}
    >
        <use href={`${props.icons}#${props.name}`} />
    </svg>
)