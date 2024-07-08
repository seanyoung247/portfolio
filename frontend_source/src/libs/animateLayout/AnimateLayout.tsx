
import React, { useRef, forwardRef, Children, ReactElement, JSXElementConstructor} from "react"
import { useOptionalRef, useLayoutChange } from "./hooks"
import { getBlankState } from "./utils"


type AnimateLayoutProps = React.PropsWithChildren

type AnimateRef = HTMLElement
type ElementRef = React.MutableRefObject<HTMLElement>


export const AnimateLayout = forwardRef<AnimateRef, AnimateLayoutProps>(
    ({children}, elRef) => {
        const ref = useOptionalRef(elRef as ElementRef)
        const element = ref.current
        const previous = useRef(getBlankState())

        if (previous.current.animation) {}

        useLayoutChange(element, previous.current, (oldLayout, newLayout) => {
            console.log(oldLayout, newLayout)
        })

        return React.cloneElement(
            Children.only(children), {ref}
        )
    }
)

export const AnimateMultiLayout = (props: AnimateLayoutProps) => (
    <>{
        Children.map(props.children, (child, index) => (
            <AnimateLayout key={ index } { ...props }>
                { child }
            </AnimateLayout>
        ))
    }</>
)
