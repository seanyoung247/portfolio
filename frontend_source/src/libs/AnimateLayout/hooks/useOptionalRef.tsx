
import { useRef } from "react";

/**
 * Custom hook that encapsulates using a ref that may or may not be forwarded 
 * by the component parent.
 * @param {Object} ref - Forward reference provided by the component parent
 * @returns Reference
 */
export const useOptionalRef = (ref = null) => {
    const myRef = useRef(null);
    return ref ?? myRef;
}
