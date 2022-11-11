import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  PointerLockControls,
  KeyboardControls,
  Sky,
} from "@react-three/drei"
import { Player } from "./Player"
import { Physics, Debug, RigidBody } from "@react-three/rapier"
import { Sun } from "./components/lights/Sun"

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
      <Canvas shadows>
        <PointerLockControls makeDefault />
        <Physics>
          <Sky />
          <Sun />
          <ambientLight intensity={0.25} />

          <Player />

          <RigidBody>
            <mesh position={[2, 0, 2]} castShadow>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="red" />
            </mesh>
          </RigidBody>

          <RigidBody type="fixed">
            <mesh position={[0, -3, 0]} receiveShadow>
              <boxGeometry args={[250, 0.2, 250]} />
              <meshStandardMaterial color="limegreen" />
            </mesh>
          </RigidBody>
        </Physics>
      </Canvas>
    </KeyboardControls>
  )
}
