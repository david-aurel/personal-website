import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Blog from '../components/blog'

const blogPage = ({ data }) => {
    data = data.allMarkdownRemark.edges

    return (
        <>
            <SEO title="Blog" image="opengraph_default.png" />
            <Blog data={data} />
        </>
    )
}

export default blogPage

export const query = graphql`
    query BlogInfo {
        allMarkdownRemark(
            filter: { frontmatter: { path: { regex: "/blog/" } } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        description
                        image
                    }
                }
            }
        }
    }
`
