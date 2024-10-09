
export class Coordinate2D {
    protected coords = [0,0] // x,y

    constructor(x:number, y:number) {
        this.coords[0] = x
        this.coords[1] = y
    }

    get x() { return this.coords[0] }
    set x(val:number) { this.coords[0] = val }
    get y() { return this.coords[1] }
    set y(val:number) { this.coords[1] = val }

    toCSS(delim = ' ', unit = 'px') {
        return this.coords.map((i)=>`${i}${unit}`).join(delim)
    }
}

export class Coordinate3D extends Coordinate2D {
    constructor(x:number, y:number, z:number) {
        super(x, y)
        this.coords.push(z)
    }

    get z() { return this.coords[2] }
    set z(val:number) { this.coords[2] = val }
}
