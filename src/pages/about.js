import React from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

import SEO from "../components/seo"
import About from "../components/about"

const aboutPage = () => (
  <PageTransition>
    <SEO title="About me" />
    <About />
  </PageTransition>
)

export default aboutPage
