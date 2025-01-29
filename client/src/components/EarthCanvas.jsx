import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

// import CanvasLoader from './canvas/Loader'

const Earth = () => {
    // Ensure the hook is used within the Canvas component
    const earth = useGLTF('/planet/scene.gltf')

    return (
        <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
    )
}

const EarthCanvas = () => {
    return(
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        >
            <Suspense fallback="HI">
                {/* OrbitControls and the Earth object are now inside the Canvas */}
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI/2}
                    minPolarAngle={Math.PI/2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas;
