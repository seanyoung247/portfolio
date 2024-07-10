
import React, { useRef, forwardRef, Children, ReactElement } from "react"
import { useLayoutChange, useOptionalRef } from "./hooks"
import { keyframe, createAnimation, calcOffsets, combineKeyframes } from "./animation"
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
        const previous = useRef<LayoutState>(getBlankState())

        useLayoutChange(element, previous.current, (oldLayout, newLayout) => {
            if (element) {
                const offsets = calcOffsets(oldLayout, newLayout)
                const keyframes = (combineKeyframes(
                    keyframe.scale, keyframe.translate.cornerVtoH
                ))(offsets)
                previous.current.animation = createAnimation(element, keyframes, 5000)
                previous.current.animation.play()
            }
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
