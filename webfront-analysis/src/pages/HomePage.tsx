import React, { useCallback, useEffect, useState } from "react"
import { Grid, Tab, Tabs } from "@mui/material"
import { HomePageTab, type HomePageTabEnum, tabToValue, valueToTab } from "../core/HomePageTabEnum"
import { GlobalTab } from "./components/GlobalTab"
import { CompanyTab } from "./components/CompanyTab"

export function HomePage(): React.JSX.Element {
  const [selectedTab, setSelectedTab] = useState<HomePageTabEnum>(HomePageTab.Global)

  const selectTab = useCallback((event: React.SyntheticEvent, value: any) => {
    setSelectedTab(valueToTab(value))
  }, [])

  useEffect(() => {
    console.log("selectedTab", selectedTab)
    console.log("tabToValue(selectedTab)", tabToValue(selectedTab))
  }, [])

  return (
    <Grid container columnSpacing={2} rowGap={1} sx={{ width: "100%" }}>
      <Grid size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Tabs value={tabToValue(selectedTab)} onChange={selectTab}>
          <Tab label="Global" />
          <Tab label="Company" />
        </Tabs>
      </Grid>
      <Grid size={12}>
        {selectedTab === HomePageTab.Global && <GlobalTab />}
        {selectedTab === HomePageTab.Company && <CompanyTab />}
      </Grid>
    </Grid>
    // </Box>
  )
}
