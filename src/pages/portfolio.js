import React from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import SEO from "../components/seo"

import Portfolio from "../components/portfolio"

const portfolioPage = ({ data }) => {
  data = data.allPortfolioInfoJson.edges
  return (
    <PageTransition>
      <SEO title="Portfolio" />
      <Portfolio data={data} />
    </PageTransition>
  )
}

export default portfolioPage

export const query = graphql`
  query MyQuery {
    allPortfolioInfoJson {
      edges {
        node {
          title
          description
          path
        }
      }
    }
  }
`
