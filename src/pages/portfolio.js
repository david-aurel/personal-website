import React from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

import SEO from "../components/seo"
// import Layout from "../components/layout"
import Portfolio from "../components/portfolio"

const portfolioPage = () => (
  <PageTransition>
    <SEO title="Portfolio" />
    <p>PORTFOLIO</p>
    <Link to="/">Go back to the homepage</Link>
  </PageTransition>
)

export default portfolioPage
