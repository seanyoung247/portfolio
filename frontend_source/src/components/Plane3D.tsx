import { css } from "@emotion/react"
import { Coordinate3D } from "~/utilities/coords"

type Plane3DProps = {
    width: string,
    height: string,
    position: Coordinate3D,
    rotation: Coordinate3D,
    fade?: number,
    image: string,
}

export const Plane3D = (
    {width, height, position, rotation, fade=0, image}:Plane3DProps) => (

    <div css={css`
        position: absolute;
        width: ${width};
        height: ${height};
        background: 
            ${fade > 0 ? `linear-gradient(90deg, rgba(0,0,0,${fade}) 0%, rgba(0,0,0,${fade}) 100%),` : ''}
            url(${image}) repeat center / 100%;
        backface-visibility: hidden;
        transform: 
            translate3d(${position.toCSS(',')})
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            rotateZ(${rotation.z}deg);
    `}/>
)
