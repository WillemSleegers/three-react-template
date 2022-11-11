import { useRef } from "react"
import { DirectionalLightHelper } from "three"
import { useHelper } from "@react-three/drei"

export const Sun = () => {
  const sun = useRef(null)
  useHelper(sun, DirectionalLightHelper, 1)

  return (
    <directionalLight
      ref={sun}
      position={[100, 40, 0]}
      intensity={1}
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
