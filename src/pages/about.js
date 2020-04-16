import React from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

import SEO from "../components/seo"
// import Layout from "../components/layout"
import About from "../components/about"

const aboutPage = () => (
  <PageTransition>
    <SEO title="About me" />
    <p>about</p>
    <Link to="/">Go back to the homepage</Link>
  </PageTransition>
)

export default aboutPage
