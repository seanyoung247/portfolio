
import { css } from "@emotion/react"

type Viewport3DProps = {
    width: string,
    height: string,
    perspective: string,
    children: React.ReactNode,
}

export const View3D = ({width, height, perspective, children}: Viewport3DProps) => (
    <div css={css`
        display: flex;
        width: ${width};
        height: ${height};
        justify-content: center;
        align-items: center;
        border: 1px solid red;

        transform-style: preserve-3d;
        perspective: ${perspective};
    `}>
        { children }
    </div>
)
