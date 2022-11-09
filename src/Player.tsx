import { Vector3, Mesh, Quaternion } from "three"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { RigidBody, RigidBodyApi, RigidBodyApiRef } from "@react-three/rapier"
import { useRef } from "react"

export const Player = () => {
  const cube = useRef<RigidBodyApi>(null)

  const direction = new Vector3()
  let velocity = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()
  const SPEED = 0.5

  const [subscribeKeys, getKeys] = useKeyboardControls()

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = getKeys()
    const camera = state.camera

    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(leftward) - Number(rightward), 0, 0)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)

    velocity.set(direction.x, 0, direction.z)
    const currentDirection = cube.current!.translation()

    currentDirection.add(direction)

    cube.current!.setNextKinematicTranslation(currentDirection)

    //cube.current!.setTranslation(velocity)
    //cube.current!.setTranslation(velocity)

    // Update camera
    const bodyPosition = cube.current!.translation()
    const cameraPosition = new Vector3()

    cameraPosition.copy(bodyPosition)

    camera.position.copy(cameraPosition)
  })

  return (
    <RigidBody
      ref={cube}
      mass={1}
      friction={0}
      restitution={0}
      type="kinematicPosition"
    >
      <mesh castShadow rotation={[0, Math.PI * 0.5, 0]}>
        <capsuleGeometry />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>
    </RigidBody>
  )
}
