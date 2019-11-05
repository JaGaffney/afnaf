import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>ERROR: PAGE NOT FOUND</h1>
    <p>Something seems to have gone wrong =(, go back to the homepage maybe?</p>
    <Link to="/">
      <button className="btn">Go back</button>
    </Link>
  </Layout>
)

export default NotFoundPage
