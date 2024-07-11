
type AnimKeyframes = KeyframeFunction | null
type AnimOptions = number | AnimationEffectTiming

export class LayoutAnimation {
    private _keyframes: AnimKeyframes
    private _options: AnimOptions
    private _animation: Animation | null

    constructor(keyframes: AnimKeyframes = null, options: AnimOptions = 1000) {
        this._keyframes = keyframes
        this._options = options
        this._animation = null
    }

    public get keyframes() { return this._keyframes }
    public set keyframes(keyframes: AnimKeyframes) { this._keyframes = keyframes }

    public get options() { return this._options }
    public set options(options: AnimOptions) { this._options = options }

    public get animation() { return this._animation }

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

export const keyframeAnimations = {

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
            // translate: [`${position.x}px ${position.y}px`, `${position.x}px 0`, '0 0']
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
