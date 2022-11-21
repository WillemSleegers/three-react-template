import { Mesh, Vector3 } from "three"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { RigidBody, RigidBodyApi } from "@react-three/rapier"
import { useEffect, useRef } from "react"

export const Player = () => {
  const body = useRef<RigidBodyApi>(null)
  const ref = useRef<Mesh>(null)

  const direction = new Vector3()
  let velocity = new Vector3()
  let cameraPosition = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()
  const SPEED = 100

  const vec = new Vector3()

  const [subscribeKeys, getKeys] = useKeyboardControls()

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward, jump } = getKeys()
    const camera = state.camera
    ref.current!.getWorldPosition(camera.position)

    camera.position.y += 2
    camera.position.z += 2

    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(leftward) - Number(rightward), 0, 0)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation)

    velocity.set(direction.x * delta, 0, direction.z * delta)

    body.current!.applyImpulse(velocity)
  })

  const jump = () => {
    body.current!.applyImpulse({ x: 0, y: 30, z: 0 })
  }

  useEffect(() => {
    return subscribeKeys(
      (state: any) => state.jump,
      (pressed) => {
        if (pressed) jump()
      }
    )
  }, [])

  return (
    <>
      <RigidBody
        ref={body}
        mass={1}
        friction={0}
        restitution={0}
        enabledRotations={[false, false, false]}
        linearDamping={10}
        gravityScale={10}
      >
        <mesh ref={ref} castShadow>
          <capsuleGeometry args={[0.2, 0.5, 1]} />
          <meshStandardMaterial flatShading color="mediumpurple" />
        </mesh>
      </RigidBody>
    </>
  )
}
