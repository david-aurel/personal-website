import React from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

import SEO from "../components/seo"
// import Layout from "../components/layout"
import Blog from "../components/blog"

const blogPage = () => (
  <PageTransition>
    <SEO title="Portfolio" />
    <p>blog</p>
    <Link to="/">Go back to the homepage</Link>
  </PageTransition>
)

export default blogPage
