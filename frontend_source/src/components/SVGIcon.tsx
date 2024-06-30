
type SVGIconProps = {
    icons: string, 
    name: string, 
    className?: string
}

export const SVGIcon = (props: SVGIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={props?.className}
    >
        <use href={`${props.icons}#${props.name}`} />
    </svg>
)