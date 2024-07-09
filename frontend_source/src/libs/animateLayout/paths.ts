
export type Point = {
    x: number,
    y: number,
}
export type PointFunction = (start:ElementLayout, end: ElementLayout) => Point[]
export type PathFunction = (start:ElementLayout, end: ElementLayout, points?:PointFunction) => string

export const calcPoints = (start:ElementLayout, end:ElementLayout): Point[] => {
    return [{
            x: Math.floor( (start.x - end.x) + (start.width / 2) ), 
            y: Math.floor( (start.y - end.y) + (start.height / 2) )
        },{
            x: Math.floor( end.width / 2 ),
            y: Math.floor( end.height / 2 )
    }]
}

export const pathDirectTo = (start:ElementLayout, end:ElementLayout, points:PointFunction=calcPoints): string => {
    const [s, e] = points(start, end)
    return `path("M${s.x},${s.y} L${e.x},${e.y}");`
}