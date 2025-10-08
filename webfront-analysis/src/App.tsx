import "./App.css"
import React from "react"
import { HomePage } from "./pages/HomePage"
import { Layout } from "./core/components/Layout/Layout"

export function App(): React.JSX.Element {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}
