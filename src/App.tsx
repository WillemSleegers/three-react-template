import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  PointerLockControls,
  KeyboardControls,
} from "@react-three/drei"
import { Player } from "./Player"
import { Mesh } from "three"
import { Physics, Debug, RigidBody } from "@react-three/rapier"

export const App = () => {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Canvas>
        <PointerLockControls makeDefault />
        <Physics>
          <directionalLight
            position={[1, 2, 3]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={10}
            shadow-camera-right={10}
            shadow-camera-bottom={-10}
            shadow-camera-left={-10}
          />
          <ambientLight intensity={0.5} />

          <Player />

          <RigidBody type="fixed" restitution={0.2} friction={0}>
            <mesh position={[0, -3, 0]} receiveShadow>
              <boxGeometry args={[10, 0.2, 10]} />
              <meshStandardMaterial color="limegreen" />
            </mesh>
          </RigidBody>
        </Physics>
      </Canvas>
    </KeyboardControls>
  )
}
