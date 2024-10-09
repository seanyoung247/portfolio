import { Plane3D } from "./components/Plane3D"
import { View3D } from "./components/View3D"

import stone from './assets/stone.png'
import { Coordinate3D } from "./utilities/coords"

const App = () => {
    return (
        <View3D width="100%" height="100lvh" perspective="600px">
            <Plane3D 
                width="600px" 
                height="600px" 
                position={ new Coordinate3D(0,0,-1000) } 
                rotation={ new Coordinate3D(0,0,0) }
                image={stone}
            />
            <Plane3D 
                width="600px" 
                height="600px" 
                position={ new Coordinate3D(-300,0,-700) } 
                rotation={ new Coordinate3D(0,90,0) }
                image={stone}
            />
        </View3D>
    )
}

export default App
