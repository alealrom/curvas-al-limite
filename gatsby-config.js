module.exports = {
  siteMetadata: {
    title: "Curvas al Límite",
    url: "https://curvasallimite.com",
    siteUrl: "https://curvasallimite.com",
    author: "Alejandra Álvarez Romero",
    nickname: "alealrom",
    description:
      "Curvas al Límite, resalta la labor y huella que dejan o han dejado las mujeres en los diferentes campos del automovilismo. Destacando que con perseverancia los sueños de miles de niñas y mujeres se pueden cumplir.",
    twitterUsername: "@alealrom",
    blogPostPrefixPath: "/blog",
    blogPostsPaginatePrefixPath: "/blog/page",
    image: "src/images/icon.png",
    social: [
      "github#https://github.com/alealrom",
      "twitter#https://twitter.com/alealrom",
      "email#mailto:ale@alealrom.co",
    ],
  },
  plugins: [
    `gatsby-plugin-netlify`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
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
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald`],
        display: "swap",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true,
        formatting: {
          format: "DD de MMMM YYYY",
          utc: false,
        },
        locale: "es",
      },
    },
    {
      resolve: `gatsby-source-podcast-rss-feed`,
      options: {
        feedURL: `https://media.rss.com/aar-periodista/feed.xml`,
        id: "guid",
      },
    },
  ],
};
