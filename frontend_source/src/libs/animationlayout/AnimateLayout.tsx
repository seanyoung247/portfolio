
import React, { useRef, forwardRef, Children, ReactElement } from "react"
import { useLayoutChange, useOptionalRef } from "./hooks"
import { keyframeAnimations, calcOffsets, combineKeyframes } from "./animation"
import { getBlankState } from "./utils"


type AnimateLayoutProps = {
    children: ReactElement | ReactElement[]
}

type AnimateRef = HTMLElement
type ElementRef = React.MutableRefObject<HTMLElement>


export const AnimateLayout = forwardRef<AnimateRef, AnimateLayoutProps>(
    // ({children}, elRef) => {
    (props, elRef) => {
        const ref = useOptionalRef(elRef as ElementRef)
        const element = ref.current
        const previous = useRef<LayoutState>(getBlankState())

        useLayoutChange(element, previous.current, (oldLayout, newLayout) => {
            if (element) {
                previous.current?.animation?.finish()
                const offsets = calcOffsets(oldLayout, newLayout)
                const keyframes = (combineKeyframes(
                    keyframeAnimations.scale, keyframeAnimations.translate.cornerVtoH
                ))(offsets)

                previous.current.animation = element.animate(keyframes, 1000)
                previous.current.animation.play()
            }
        })

        return ( (Children.count(props.children) > 1) ?
            Children.map(props.children, (child, index) => (
                <AnimateLayout key={ index } { ...props }>
                    { child }
                </AnimateLayout>
            )) :
            React.cloneElement(
                Children.only(props.children), {ref}
            )
        )
    }
)
