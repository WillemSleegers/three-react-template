import { RigidBody } from "@react-three/rapier"

type CubeProps = {
  position: { x: number; y: number; z: number }
  visible: boolean
  color: string
}

export const Cube = (props: CubeProps) => {
  const { position, visible, color } = props

  return (
    <RigidBody>
      <mesh castShadow position={[position.x, 4, position.z]} visible={visible}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  )
}
