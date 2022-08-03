const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMdx(sort: { fields: frontmatter___date, order: DESC } limit: 1000
            ) {
              nodes {
                id
                slug
                frontmatter {
                  author
                  date(locale: "es", formatString: "DD MMMM YYYY")
                  description
                  title
                  hero_image_alt
                  hero_image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error corriendo la query de GraphlQL`)
    return
  }
  
  const posts = result.allMdx.nodes
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/pages/blog/index.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}