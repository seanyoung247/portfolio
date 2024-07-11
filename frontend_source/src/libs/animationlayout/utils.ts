
export const getLayout = (el: HTMLElement | null): ElementLayout | null => (
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

export const getBlankState = () => ({
    animation: null,
    layout: null,
})

export const layoutHasChanged = (
    current:ElementLayout, 
    previous:ElementLayout
):boolean => (!(

    current.x === previous.x &&
    current.y === previous.y &&
    current.left === previous.left &&
    current.top === previous.top &&
    current.right === previous.right &&
    current.bottom === previous.bottom &&
    current.width === previous.width &&
    current.height === previous.height
))
