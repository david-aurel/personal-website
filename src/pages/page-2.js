import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"

const SecondPage = () => (
  <Layout>
    <PageTransition>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </PageTransition>
  </Layout>
)

export default SecondPage
