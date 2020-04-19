import React from 'react'
import { Link } from 'gatsby'
import { Router } from '@reach/router'
import PageTransition from 'gatsby-plugin-page-transitions'

import SEO from '../components/seo'
import Blog from '../components/blog'

const blogPage = ({ data }) => {
    data = data.allMarkdownRemark.edges

    return (
        <PageTransition>
            <SEO title="Blog" />
            <Blog data={data} />
        </PageTransition>
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
                    }
                }
            }
        }
    }
`
