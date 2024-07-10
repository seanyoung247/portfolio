
export const createAnimation = (
    element: HTMLElement,
    keyframes: AnimationKeyFrame | AnimationKeyFrame[],
    options: number | AnimationEffectTiming
) => {
    const animation = element.animate(keyframes, options)
    animation.pause()
    return animation
}

export const calcOffsets = (oldLayout: ElementLayout, newLayout: ElementLayout): LayoutOffset => ({
    position: {
        x: (oldLayout.x - newLayout.x) + ((oldLayout.width - newLayout.width) / 2),
        y: (oldLayout.y - newLayout.y) + ((oldLayout.height - newLayout.height) / 2)
    },
    scale: {
        x: (oldLayout.width / newLayout.width),
        y: (oldLayout.height / newLayout.height)
    }
})

export const keyframe = {

    scale: ({scale}: LayoutOffset): AnimationKeyFrame => ({
        scale: [ `${scale.x} ${scale.y}`, '1 1' ]
    }),

    translate: {
        directTo: ({position}: LayoutOffset): AnimationKeyFrame =>({
            translate: [`${position.x}px ${position.y}px`, '0 0']
        }),
        cornerHtoV: ({position}: LayoutOffset): AnimationKeyFrame =>({
            translate: [`${position.x}px ${position.y}px`, `0 ${position.y}px`, '0 0']
        }),
        cornerVtoH: ({position}: LayoutOffset): AnimationKeyFrame =>({
            translate: [`${position.x}px ${position.y}px`, `${position.x}px 0`, '0 0']
        }),
    } 
}

export const combineKeyframes = (...keyframeFunctions:KeyframeFunction[]): KeyframeFunction => (
    (offsets: LayoutOffset) => (
        keyframeFunctions.reduce((keyframes, func) => (
            {...keyframes, ...func(offsets)}
        ), {})
    )
)
