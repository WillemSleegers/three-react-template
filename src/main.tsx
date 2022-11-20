import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import "./index.css"

const element = document.getElementById("root") as HTMLElement
const root = createRoot(element)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
