import React from 'react'
import { graphql, Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

export default function blogTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <PageTransition>
            <Link to="/blog" className="back-icon">
                Go back
            </Link>
            <div className="page blog-post-container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>

                    <p className="italic">{frontmatter.date}</p>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </PageTransition>
    )
}
export const blog = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                date
            }
        }
    }
`
