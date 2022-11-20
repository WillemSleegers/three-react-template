import { RigidBody } from "@react-three/rapier"

export const BarGraph = () => {
  return (
    <group position={[-2, 0, -4]}>
      <RigidBody mass={10}>
        <mesh castShadow position={[0, 0, 0]}>
          <boxGeometry args={[1, 2, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody mass={10}>
        <mesh castShadow position={[2, 0, 0]}>
          <boxGeometry args={[1, 3, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody mass={10}>
        <mesh castShadow position={[4, 0, 0]}>
          <boxGeometry args={[1, 4, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
    </group>
  )
}
