
export class LayoutAnimation {
    #keyframes = null;
    #options;
    /**
     * Creates a new LayoutAnimation
     * @param {Object|Array} keyframes - Function that returns Web Animation API keyframes
     * @param {Number|Object} options - Web Animation API options
     */
    constructor(keyframes = null, options = 1000) {
        this.#keyframes = keyframes;
        this.#options = options;
    }

    get keyframes() { return this.#keyframes; }
    set keyframes(val) { this.#keyframes = val; }

    get options() { return this.#options; }
    set options(val) { this.#options = val; }

    update(animation) {}
    /**
     * Creates and attaches the Web Animation API animation described by this class 
     * to the specified element.
     * @param {HTMLElement} element - DOM Element to attach animation to
     * @param {Object} oldLayout - Previous layout rect
     * @param {Object} newLayout - Current layout rect
     * @returns Web Animation object created
     */
    animate(element, oldLayout, newLayout) {
        const anim = element.animate(
            this.#keyframes?.(oldLayout, newLayout), 
            this.#options
        );
        anim.play();
        return anim;
    }
}

/** Defines a simple keyframed tween. */
export class LayoutTween extends LayoutAnimation {
    #percent = 0;
    constructor(keyframes, options) {
        if (options instanceof Object) options.duration = 100;
        else options = 100;
        super(keyframes, options);
    }

    get percent() { return this.#percent; }
    set percent(val) { this.#percent = val; }

    update(animation) {
        animation.currentTime = this.#percent;
        if (this.#percent >= 100) animation.finish();
    }
    
    animate(element, oldLayout, newLayout) {
        const anim = super.animate(element, oldLayout, newLayout);
        anim.pause();
        anim.currentTime = this.#percent;
        return anim;
    }
}