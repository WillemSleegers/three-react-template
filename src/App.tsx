import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { PointerLockControls, KeyboardControls } from "@react-three/drei"
import { Physics, Debug } from "@react-three/rapier"
import { Player } from "./components/Player"
import { Sky } from "./components/Sky"
import { Floor } from "./components/Floor"
import { BarGraph } from "./components/BarGraph"

import { Leva, useControls } from "leva"
import { Perf } from "r3f-perf"

import { keys } from "./keys"

export const App = () => {
  const { perfVisible } = useControls("performance", { perfVisible: false })
  const { physicsDebug } = useControls("debug", { physicsDebug: false })
  const { showShadows } = useControls("shadows", { showShadows: true })

  const [locked, setLocked] = useState(false)

  const showDebug = window.location.hash === "#debug"

  const onLock = () => {
    setLocked(true)
  }

  const onUnlock = () => {
    setLocked(false)
  }

  return (
    <KeyboardControls map={keys}>
      <Leva collapsed={false} hidden={!showDebug} />
      <Canvas shadows={showShadows}>
        {perfVisible && <Perf position="top-left" />}
        <PointerLockControls makeDefault onLock={onLock} onUnlock={onUnlock} />
        <Sky />
        <Physics>
          {physicsDebug && <Debug />}

          <ambientLight intensity={0.25} />
          <Floor />
          <BarGraph />

          <Player />
        </Physics>
      </Canvas>
    </KeyboardControls>
  )
}
