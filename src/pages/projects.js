import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Projects from '../components/projects'

const projectsPage = ({ data }) => {
    data = data.allMarkdownRemark.edges
    console.log(data)

    return (
        <>
            <SEO title="Projects" image="opengraph-default.png" />
            <Projects data={data} />
        </>
    )
}

export default projectsPage

export const query = graphql`
    query ProjectsInfo {
        allMarkdownRemark(
            filter: { frontmatter: { path: { regex: "/projects/" } } }
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
