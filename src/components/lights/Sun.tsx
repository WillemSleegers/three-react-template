import { useRef } from "react"
import { Vector3, DirectionalLightHelper, DirectionalLight } from "three"
import { useHelper } from "@react-three/drei"

type sunProps = {
  position: Vector3
  intensity: number
}

export const Sun = (props: sunProps) => {
  const { position, intensity } = props

  const sun = useRef<DirectionalLight>(null)
  useHelper(sun, DirectionalLightHelper, 1)

  return (
    <directionalLight
      ref={sun}
      position={position}
      intensity={intensity}
      castShadow
      shadow-mapSize={[1024, 1024]}
      shadow-camera-near={1}
      shadow-camera-far={1000}
      shadow-camera-top={10}
      shadow-camera-right={10}
      shadow-camera-bottom={-10}
      shadow-camera-left={-10}
    />
  )
}
