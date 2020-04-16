import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import PageTransition from "gatsby-plugin-page-transitions"
import SEO from "../components/seo"

import Portfolio from "../components/portfolio"
import PortfolioCard from "../components/portfolioCard"

const portfolioPage = ({ data }) => {
  data = data.allPortfolioInfoJson.edges
  return (
    <PageTransition>
      <SEO title="Portfolio" />
      <Router>
        <Portfolio path="/portfolio" data={data} />
        <PortfolioCard path="/portfolio/:name" />
      </Router>
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
