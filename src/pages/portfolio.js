import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import PageTransition from "gatsby-plugin-page-transitions"

import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const portfolioPage = ({ data }) => {
  data = data.allMarkdownRemark.edges

  return (
    <PageTransition>
      <SEO title="Portfolio" />
      <Portfolio data={data} />
    </PageTransition>
  )
}

export default portfolioPage

export const query = graphql`
  query PortfolioInfo {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/portfolio/" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            description
            thumbnail
          }
        }
      }
    }
  }
`
