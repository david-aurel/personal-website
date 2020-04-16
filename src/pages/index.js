import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"

const IndexPage = () => {
  useEffect(() => {
    navigate("/portfolio")
  })
  return (
    <PageTransition>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </PageTransition>
  )
}

export default IndexPage
