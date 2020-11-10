import React from "react"
import { ThemeProvider } from "theme-ui"
import { swiss } from "@theme-ui/presets"
import { IdentityProvider } from "./src/utils/Identity"

const tokens = {
  ...swiss,
  sizes: { container: 1024 },
}

export const wrapRootElement = ({ element }) => (
  <IdentityProvider>
    <ThemeProvider theme={tokens}>{element}</ThemeProvider>
  </IdentityProvider>
)
