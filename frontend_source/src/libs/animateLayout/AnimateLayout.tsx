
import React, { useRef, forwardRef, Children, ReactElement } from "react"
import { useOptionalRef, useLayoutChange } from "./hooks"
import { getBlankState } from "./utils"


type AnimateBaseProps<childType> = {
    children: childType
}
type AnimateLayoutProps = AnimateBaseProps<ReactElement>
type AnimateMultiLayoutProps = AnimateBaseProps<ReactElement[]>

type AnimateRef = HTMLElement
type ElementRef = React.MutableRefObject<HTMLElement>


export const AnimateLayout = forwardRef<AnimateRef, AnimateLayoutProps>(
    ({children}, elRef) => {
        const ref = useOptionalRef(elRef as ElementRef)
        const element = ref.current
        const previous = useRef(getBlankState())

        if (previous.current.animation) { 
            console.log('No anims yet!')
        }

        useLayoutChange(element, previous.current, (oldLayout, newLayout) => {
            console.log(oldLayout, newLayout)
        })

        return React.cloneElement(
            Children.only(children), {ref}
        )
    }
)

export const AnimateMultiLayout = (props: AnimateMultiLayoutProps) => (
    <>{
        Children.map(props.children, (child, index) => (
            <AnimateLayout key={ index } { ...props }>
                { child }
            </AnimateLayout>
        ))
    }</>
)
