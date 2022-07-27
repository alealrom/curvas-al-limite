module.exports = {
  siteMetadata: {
    title: "Formula M",
    siteUrl: "https://www.yourdomain.tld",
    author: "@alealrom",
    description: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog` 
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald`,
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Formula M",
        short_name: "Formula M",
        start_url: "/",
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "/src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true,
        formatting: {
          format: 'DD de MMMM YYYY',
          utc: false,
        },
        locale: 'es',
      },
    },
    {
      resolve: `gatsby-source-podcast-rss-feed`,
      options: {
        feedURL: `https://media.rss.com/aar-periodista/feed.xml`,
        id: 'guid',
      },
    },
  ],
};