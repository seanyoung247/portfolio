
import React, { useRef, forwardRef, Children, ReactElement } from "react"
import { useLayoutChange, useOptionalRef } from "./hooks"
import { calcOffsets } from "./animation"
import { getBlankState } from "./utils"


type AnimateLayoutProps = {
    offsets?: offsetFunction,
    keyframes: KeyframeFunction,
    position?: number | null,
    options?: AnimationEffectTiming,
    children: ReactElement | ReactElement[]
}

type AnimateRef = HTMLElement
type ElementRef = React.MutableRefObject<HTMLElement>


export const AnimateLayout = forwardRef<AnimateRef, AnimateLayoutProps>(
    ({offsets = calcOffsets, keyframes, position = null, options = {duration:100}, children}, elRef) => {

        const ref = useOptionalRef(elRef as ElementRef)
        const element = ref.current
        const previous = useRef<LayoutState>(getBlankState())

        if (position && previous?.current?.animation) {
            previous.current.animation.currentTime = position;
        }

        useLayoutChange(element, previous.current, (oldLayout, newLayout) => {
            if (element) {
                previous?.current?.animation?.cancel()
                previous.current.animation = element.animate(
                    keyframes(offsets(oldLayout, newLayout)), 
                    options
                )
                // If a playback rate has been set in the options, set it. (allows pausing for instance)
                previous.current.animation.playbackRate = options?.playbackRate ?? 1
                // If a position has been provided, jump to it.
                if (position) previous.current.animation.currentTime = position;
            }
        })

        return ( (Children.count(children) > 1) ?
            Children.map(children, (child, index) => (
                <AnimateLayout key={ index } { ...{offsets, keyframes, position, options} }>
                    { child }
                </AnimateLayout>
            )) :
            React.cloneElement(
                Children.only(children), {ref}
            )
        )
    }
)
