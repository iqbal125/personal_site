import React from "react"
import "./styles/global.css"
import Layout from "../components/layout"
import Home from "../components/Home"

const IndexPage = props => (
  <Layout props={props}>
    <Home />
  </Layout>
)

export default IndexPage
