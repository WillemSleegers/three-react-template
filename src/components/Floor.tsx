import { Mesh } from "three"
import { usePlane } from "@react-three/cannon"

export const Floor = () => {
  const [ref] = usePlane<any>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -5, 0],
  }))
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="limegreen" />
    </mesh>
  )
}
