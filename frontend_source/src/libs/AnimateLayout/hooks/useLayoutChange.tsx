
import { useRef, useLayoutEffect } from 'react';


const getLayoutState = (el:HTMLElement):ElementLayout | null => (
    el ? {
        x: el.offsetLeft,
        y: el.offsetTop,
        top: el.offsetTop,
        left: el.offsetLeft,
        right: el.offsetLeft + el.offsetWidth,
        bottom: el.offsetTop + el.offsetHeight,
        height: el.offsetHeight,
        width: el.offsetWidth,
    } : null
)

const layoutHasChanged = (current:ElementLayout, previous:ElementLayout):boolean => (!(  
    current.x === previous.x &&
    current.y === previous.y &&
    current.left === previous.left &&
    current.top === previous.top &&
    current.right === previous.right &&
    current.bottom === previous.bottom &&
    current.width === previous.width &&
    current.height === previous.height
))

/**
 * Custom hook that watches for layout change in encapsulated element
 * @param {HTMLElement} element - Watched element
 * @param {ElementLayout} previous - State object for the previous state
 * @param {Function} onChange - Function to call when the layout changes
 */
export const useLayoutChange(element:HTMLElement, previous:ElementLayout, onChange) => {

}