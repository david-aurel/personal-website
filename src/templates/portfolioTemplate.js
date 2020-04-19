import React from 'react'
import { graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

export default function PortfolioTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <PageTransition>
            <div className="page portfolio-post-container">
                <div className="portfolio-post">
                    <h1>{frontmatter.title}</h1>
                    <p className="italic subtitle">{frontmatter.description}</p>
                    <div
                        className="portfolio-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </PageTransition>
    )
}
export const portfolio = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`
