import React from "react"
import { Box } from "@mui/material"
import type { Children } from "../../Children"

export function Layout({ children }: Readonly<Children>): React.JSX.Element {
  return <Box>{children}</Box>
}
