const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const prefixBlogPostUrl = "/blog";
  const prefixPodcastsUrl = "/podcast";

  const blogTemplate = path.resolve("src/templates/blog/index.js");
  const podcastsTemplate = path.resolve("src/templates/podcast/podcast.js");

  const result = await getAllPosts(graphql);
  const resultPodcasts = await getAllPodcast(graphql);

  const posts = result.data.allMdx.nodes;
  const podcasts = resultPodcasts.data.allPodcastRssFeedEpisode.nodes;

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 1,
    pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? prefixBlogPostUrl : `${prefixBlogPostUrl}/page`,
    component: blogTemplate
  })

  paginate({
    createPage,
    items: podcasts,
    itemsPerPage: 9,
    pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? prefixPodcastsUrl : `${prefixPodcastsUrl}/page`,
    component: podcastsTemplate
  })
}

async function getAllPosts(graphql) {
  return graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 1000) {
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

async function getAllPodcast(graphql) {
  return graphql(`
    {
        allPodcastRssFeedEpisode(limit: 1000) {
          nodes {
            item {
              title
              isoDate(locale: "es", formatString: "DD MMMM YYYY")
              itunes {
                duration
                summary
                image
              }
              enclosure {
                type
                url
              }
            }
          }
        }
    }
    `);
}
