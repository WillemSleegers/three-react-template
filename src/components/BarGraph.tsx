import { useBox } from "@react-three/cannon"

export const BarGraph = () => {
  const [ref1] = useBox<any>(() => ({ mass: 1, position: [0, 2, 0] }))
  const [ref2] = useBox<any>(() => ({ mass: 1, position: [2, 2, 0] }))
  const [ref3] = useBox<any>(() => ({ mass: 1, position: [4, 2, 0] }))

  return (
    <group position={[-2, 0, -4]}>
      <mesh ref={ref1}>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh ref={ref2}>
        <boxGeometry args={[1, 4, 0.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh ref={ref3}>
        <boxGeometry args={[1, 6, 0.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  )
}
