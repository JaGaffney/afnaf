import React from "react"

import SVG from "../images/svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Books = () => {
  return (
    <Layout>
      <SEO title="Coming Soon" />
      <div>
        <h1>Coming soon</h1>

        <h3>Civ Schedule Manager</h3>
        <div className="svg-container">
          <SVG style={{ height: "20rem" }} />
        </div>
      </div>
    </Layout>
  )
}

export default Books
