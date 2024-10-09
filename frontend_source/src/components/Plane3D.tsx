import { css } from "@emotion/react"
import { Coordinate3D } from "~/utilities/coords"

type Plane3DProps = {
    width: string,
    height: string,
    position: Coordinate3D,
    rotation: Coordinate3D,
    image: string,
}

export const Plane3D = (
    {width, height, position, rotation, image}:Plane3DProps) => (

    <div css={css`
        position: absolute;
        width: ${width};
        height: ${height};
        background: url(${image}) no-repeat center/100%;
        backface-visibility: hidden;
        transform: 
            translate3d(${position.toCSS(',')})
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            rotateZ(${rotation.z}deg);
    `}/>
)
