/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const projectsTemplate = path.resolve(`src/templates/projectsTemplate.js`)
    const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)
    const result = await graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component:
                node.frontmatter.path.split('/')[1] === 'blog'
                    ? blogTemplate
                    : projectsTemplate,
            context: {}, // additional data can be passed via context
        })
    })
}
