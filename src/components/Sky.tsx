import { Vector3, MathUtils } from "three"
import { Sky as SkyDrei } from "@react-three/drei"
import { useControls } from "leva"
import { Sun } from "./lights/Sun"

export const Sky = () => {
  const {
    distance,
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    elevation,
    azimuth,
    intensity,
  } = useControls("sun", {
    distance: { value: 100, min: 10, max: 1000, step: 100 },
    turbidity: { value: 10, min: 0, max: 20, step: 1 },
    rayleigh: { value: 3, min: 0, max: 4, step: 0.1 },
    mieCoefficient: { value: 0.005, min: 0, max: 0.1, step: 0.01 },
    mieDirectionalG: { value: 0.7, min: 0, max: 1, step: 0.1 },
    elevation: { value: 10, min: 0, max: 90, step: 1 },
    azimuth: { value: 0, min: 0, max: 360, step: 10 },
    intensity: { value: 1, min: 0, max: 10, step: 1 },
  })

  const sunPosition = new Vector3()
  const r = distance / 2
  const phi = MathUtils.degToRad(90 - elevation)
  const theta = MathUtils.degToRad(azimuth)
  sunPosition.setFromSphericalCoords(r, phi, theta)

  return (
    <>
      <SkyDrei
        distance={distance}
        sunPosition={sunPosition}
        turbidity={turbidity}
        rayleigh={rayleigh}
        mieCoefficient={mieCoefficient}
        mieDirectionalG={mieDirectionalG}
        azimuth={azimuth}
        inclination={elevation}
      />
      <Sun position={sunPosition} intensity={intensity} />
    </>
  )
}
