
import React, { forwardRef } from "react"
import { useOptionalRef } from "./useOptionalRef"

type AnimateLayoutProps = {
    children: React.ReactNode,
}

type AnimateRef = HTMLElement

type ElementRef = React.MutableRefObject<HTMLElement>

export const AnimateLayout = forwardRef<AnimateRef, AnimateLayoutProps>(
({children}: AnimateLayoutProps, elRef) => {
    const ref = useOptionalRef(elRef as ElementRef)
    const element = ref.current
    const previous = useRef()

    return (
        <>
            { children }
        </>
    )
})
