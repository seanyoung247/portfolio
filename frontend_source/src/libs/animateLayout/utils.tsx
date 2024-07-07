
export interface LayoutState {
    animation: null,
    x: number,
    y: number,
    top: number,
    left: number,
    right: number,
    bottom: number,
    height: number,
    width: number,
}

export const getLayoutState = 
    (el:HTMLElement): LayoutState | null => (el ? {
        x: el.offsetLeft,
        y: el.offsetTop,
        top: el.offsetTop,
        left: el.offsetLeft,
        right: el.offsetLeft + el.offsetWidth,
        bottom: el.offsetTop + el.offsetHeight,
        height: el.offsetHeight,
        width: el.offsetWidth,
        animation: null,
    } : null
)

export const layoutHasChanged = 
    (current:LayoutState, previous:LayoutState) => (!(
        current.x === previous.x &&
        current.y === previous.y &&
        current.left === previous.left &&
        current.top === previous.top &&
        current.right === previous.right &&
        current.bottom === previous.bottom &&
        current.width === previous.width &&
        current.height === previous.height
    )
);