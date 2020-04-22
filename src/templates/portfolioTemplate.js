import React from 'react'
import { graphql, Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PortfolioTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <PageTransition>
            <Link to="/portfolio" className="back-icon">
                Go back
            </Link>
            <div className="page portfolio-post-container">
                <div className="portfolio-post">
                    <h1>{frontmatter.title}</h1>
                    <p className="italic subtitle">{frontmatter.description}</p>
                    {frontmatter.url ? (
                        <span className="url">
                            <FontAwesomeIcon icon={['fas', 'globe']} />
                            <a
                                href={frontmatter.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {`${frontmatter.url}`}
                            </a>
                        </span>
                    ) : null}
                    {frontmatter.github ? (
                        <span className="url">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                            <a
                                href={frontmatter.github}
                            >{`${frontmatter.github}`}</a>
                        </span>
                    ) : null}
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
                url
                github
            }
        }
    }
`
