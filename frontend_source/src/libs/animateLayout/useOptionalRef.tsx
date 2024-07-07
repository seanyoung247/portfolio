
import { useRef } from "react";

type ElementRef = React.MutableRefObject<HTMLElement> | React.MutableRefObject<null>

/**
 * Custom hook that encapsulates using a ref that may or may not be forwarded 
 * by the component parent.
 * @param {Object} ref - Forward reference provided by the component parent
 * @returns Reference
 */
export function useOptionalRef(ref:ElementRef | null = null): ElementRef {
    const myRef = useRef(null)
    return ref || myRef
}
