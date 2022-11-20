import { RigidBody } from "@react-three/rapier"

export const Floor = () => {
  return (
    <RigidBody type="fixed">
      <mesh position={[0, -3, 0]} receiveShadow>
        <boxGeometry args={[25, 0.2, 25]} />
        <meshStandardMaterial color="limegreen" />
      </mesh>
    </RigidBody>
  )
}
