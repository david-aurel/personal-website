import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Portfolio from '../components/portfolio'

const portfolioPage = ({ data }) => {
    data = data.allMarkdownRemark.edges

    return (
        <>
            <SEO title="Portfolio" image="opengraph-default.png" />
            <Portfolio data={data} />
        </>
    )
}

export default portfolioPage

export const query = graphql`
    query PortfolioInfo {
        allMarkdownRemark(
            filter: { frontmatter: { path: { regex: "/portfolio/" } } }
            sort: { order: ASC, fields: frontmatter___order }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        path
                        thumbnail
                        github
                        url
                    }
                }
            }
        }
    }
`
