
import { useState, useRef, useLayoutEffect } from "react";
import { getLayout, layoutHasChanged } from "./utils";


type ElementRef = React.MutableRefObject<HTMLElement> | React.MutableRefObject<null>

/**
 * Custom hook that encapsulates using a ref that may or may not be forwarded 
 * by the component parent.
 * @param {Object} ref - Forward reference provided by the component parent
 * @returns Reference
 */
export const useOptionalRef = (ref:ElementRef | null = null): ElementRef => {
    const myRef = useRef(null)
    return ref || myRef
}

/**
 * Custom hook that watches for window size changes
 * @returns Object with current window width and height
 */
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    useLayoutEffect(() => {
        const updateWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', updateWindowSize)
        return () => window.removeEventListener('resize', updateWindowSize)
    }, [])

    return windowSize
}

/**
 * Custom hook that watches for layout change in encapsulated element
 * @param {HTMLElement} element - Watched element
 * @param {LayoutState} previous - State object for the previous state
 * @param {LayoutCallback} onChange - Function to call when the layout changes
 */
export const useLayoutChange = (
    element:HTMLElement | null, 
    previous:LayoutState, 
    onChange:LayoutCallback

) => {
    // Store the current position so we can check for reflow on the next render
    previous.layout = getLayout(element)

    useLayoutEffect(() => {
        // If not initial render
        if (element) {
            // If we've not yet got a previous layout grab it now
            if (!previous.layout) {
                previous.layout = getLayout(element)
            }
            // Get the current layout rectangle
            const layout = getLayout(element)
            if (previous.layout && layout && layoutHasChanged(previous.layout, layout)) {
                onChange(previous.layout, layout)
            }
        }
    })
}