
import { css } from "@emotion/react"

type Viewport3DProps = {
    width: string,
    height: string,
    maxWidth?: string,
    maxHeight?: string,
    perspective: string,
    children: React.ReactNode,
}


const Styles = (props: Viewport3DProps) => (css`
    width: ${props.width};
    height: ${props.height};
    ${props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${props.maxHeight ? `max-width: ${props.maxHeight};` : ''}
    background: black;
    overflow:hidden;

    .View3D {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        transform-style: preserve-3d;
        perspective: ${props.perspective};
    }
`)


export const View3D = (props: Viewport3DProps) => (
    <div css={Styles(props)}>
        <div className="View3D">
            { props.children }
        </div>
    </div>
)
