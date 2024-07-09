
import React, { useRef, forwardRef, Children, ReactElement } from "react"
import { useOptionalRef, useLayoutChange } from "./hooks"
import { getBlankState } from "./utils"
import { createAnimation } from "./animations"


type AnimateBaseProps<childType> = {
    children: childType
}
type AnimateLayoutProps = AnimateBaseProps<ReactElement>
type AnimateMultiLayoutProps = AnimateBaseProps<ReactElement[]>

type AnimateRef = HTMLElement
type ElementRef = React.MutableRefObject<HTMLElement>


const calcOffsets = (oldLayout:ElementLayout, newLayout:ElementLayout) => {
    return [{
        x: (oldLayout.x - newLayout.x) + ((oldLayout.width - newLayout.width) / 2),
        y: (oldLayout.y - newLayout.y) + ((oldLayout.height - newLayout.height) / 2)
    },{
        x: (oldLayout.width / newLayout.width),
        y: (oldLayout.height / newLayout.height)
    }]
}

const test = (oldLayout:ElementLayout, newLayout:ElementLayout):AnimationKeyFrame => {
    const [s] = calcOffsets(oldLayout, newLayout)
    return {
        translate: [`${s.x}px ${s.y}px`, '0 0']
    }
} 

export const AnimateLayout = forwardRef<AnimateRef, AnimateLayoutProps>(
    ({children}, elRef) => {
        const ref = useOptionalRef(elRef as ElementRef)
        const element = ref.current
        const previous = useRef<LayoutState>(getBlankState())

        useLayoutChange(element, previous.current, (oldLayout, newLayout) => {
            if (element) {
                previous.current.animation = createAnimation(element, test(oldLayout, newLayout), 1000)
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
