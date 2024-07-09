
export const createAnimation = (
    element: HTMLElement,
    keyframes: AnimationKeyFrame | AnimationKeyFrame[],
    options: number | AnimationEffectTiming
) => {
    const animation = element.animate(keyframes, options)
    animation.pause()
    return animation
}

export type KeyframeFunction = (oldLayout:ElementLayout, newLayout:ElementLayout)=>AnimationKeyFrame