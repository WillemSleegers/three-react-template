import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PointerLockControls } from "@react-three/drei"
import { Mesh } from "three"

export const App = () => {
  const cube = useRef<Mesh>(null)

  return (
    <Canvas>
      <PointerLockControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <mesh ref={cube}>
        <boxGeometry />
        <meshStandardMaterial color="red" wireframe />
      </mesh>
      <mesh position-y={-1} rotation-x={Math.PI * -0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  )
}
