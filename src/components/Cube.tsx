import { Mesh } from "three"
import { useBox } from "@react-three/cannon"

export const Cube = () => {
  const [ref] = useBox<any>(() => ({ mass: 1, position: [0, 5, 0] }))
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}
