import { Coordinate3D } from "./utilities/coords"
import { Plane3D } from "./components/Plane3D"
import { View3D } from "./components/View3D"
import { css } from "@emotion/react"

import stone from './assets/stone.png'
import stone2 from './assets/stone2.png'
import brick from './assets/brick.png'
import { useScrollState } from "./hooks/useScroll";

const TileTest = ({offset, fade=0}:{offset:number, fade?:number}) => (
    <>
        {/* left wall */}
        <Plane3D 
            width="610px" 
            height="610px" 
            position={ new Coordinate3D(-300,0,offset) } 
            rotation={ new Coordinate3D(0,90,0) }
            image={stone}
            fade={fade}
        />
        {/* Right Wall */}
        <Plane3D 
            width="610px" 
            height="610px" 
            position={ new Coordinate3D(300,0,offset) } 
            rotation={ new Coordinate3D(0,-90,0) }
            image={stone}
            fade={fade}
        />
        {/* Floor */}
        <Plane3D 
            width="610px" 
            height="610px" 
            position={ new Coordinate3D(0,300,offset) } 
            rotation={ new Coordinate3D(90,0,-90) }
            image={brick}
            fade={fade}
        />
        {/* Ceiling */}
        <Plane3D 
            width="610px" 
            height="610px" 
            position={ new Coordinate3D(0,-300, offset) } 
            rotation={ new Coordinate3D(-90,0,90) }
            image={stone2}
            fade={fade}
        />
    </>
)

const App = () => {

    const scroll = useScrollState()
    const offset = scroll.page.y * 1200;
    const fader = ((scroll.page.y * 2) / 2);

    return (<>
        <div 
            css={css`
            width:100%;
            height: 100lvh;
            position: fixed;
            bottom:0;
            display:flex;
            justify-content:center;
            align-items:center;

            @supports (-moz-appearance: none) {
                & { bottom: unset; top: 0; }
            }`
        }>
            <View3D width="100%" height="100lvh" maxWidth="1600px" perspective="600px">
                <Plane3D 
                    width="600px" 
                    height="600px" 
                    position={ new Coordinate3D(0,0,-1800 + offset) } 
                    rotation={ new Coordinate3D(0,0,0) }
                    image={stone}
                    fade={1.0-fader}
                />
                <TileTest offset={-1500 + offset} fade={0.8-fader}/>
                <TileTest offset={-900 + offset} fade={0.5-fader}/>
                <TileTest offset={-300 + offset}/>
                <TileTest offset={300 + offset}/>
            </View3D>
        </div>
        <div css={css`height:250lvh;`}></div>
    </>)
}

export default App
