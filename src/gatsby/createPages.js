const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const prefixBlogPostUrl = "/blog";
  const blogTemplate = path.resolve("src/pages/blog/index.js");

  const result = await getAllPosts(graphql);

  const posts = result.data.allMdx.nodes.map((posts, i) => {
    return {
      ...posts,
      previous: result.data.allMdx.edges[i].previous,
      next: result.data.allMdx.edges[i].next,
    };
  });

  // Create all blog pages with paginator
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 2,
    pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? prefixBlogPostUrl : `${prefixBlogPostUrl}/page`,
    component: blogTemplate
  })
};

async function getAllPosts(graphql) {
  return graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 1000) {
        edges {
          previous {
            slug
          }
          next {
            slug
          }
        }
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
  `);
}
