import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { App } from "./App"
import { theme } from "./theme"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)
