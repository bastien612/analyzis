import React, { useState } from "react"
import { Box } from "@mui/material"
import { HomePageTabEnum } from "../core/HomePageTabEnum.ts"

interface IProps {}

export function HomePage({}: Readonly<IProps>): React.JSX.Element {
  const [selectedTab, setSelectedTab] = useState<HomePageTabEnum>(HomePageTabEnum.Company)

  return (
    <Box>
      <Box>Coucou {selectedTab}</Box>
    </Box>
  )
}