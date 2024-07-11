
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

export const animations = {

    scale:{
        both: ({scale}: LayoutOffset): AnimationKeyFrame => ({
            scale: [ `${scale.x} ${scale.y}`, '1 1' ]
        }),
        x: ({scale}: LayoutOffset): AnimationKeyFrame => ({
            scale: [ `${scale.x} 1`, '1 1' ]
        }),
        y: ({scale}: LayoutOffset): AnimationKeyFrame => ({
            scale: [ `1 ${scale.y}`, '1 1' ]
        }),
    },

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
