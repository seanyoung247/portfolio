
import { LayoutAnimation } from "./utils/layoutAnimation"

export type ElementLayout = {
    x: number,
    y: number,
    top: number,
    left: number,
    right: number,
    bottom: number,
    height: number,
    width: number,
}

export type LayoutState = {
    layout: ElementLayout,
    animation: LayoutAnimation
}

export type KeyframeFunc = null