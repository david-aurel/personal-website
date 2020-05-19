import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProjectsTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description}
                image={frontmatter.image}
            />
            <Link to="/projects" className="back-icon">
                Go back
            </Link>
            <div className="page projects-post-container">
                <div className="projects-post">
                    <h1>{frontmatter.title}</h1>
                    <p className="italic subtitle">{frontmatter.description}</p>
                    {frontmatter.url && (
                        <div className="iframe-wrapper">
                            <span className="live">
                                <div />
                                <span>Live</span>
                            </span>
                            <iframe
                                src={frontmatter.url}
                                title={`iframe ${frontmatter.title}`}
                            >
                                {' '}
                            </iframe>
                        </div>
                    )}
                    <div className="projects-links">
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
                    </div>
                    <div
                        className="projects-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </>
    )
}
export const projects = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                description
                url
                github
                image
            }
        }
    }
`
