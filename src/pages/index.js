import * as React from "react";
import "./index.css";
import { Helmet } from "gatsby-plugin-react-helmet";
import Banner from "../components/banner/banner";
import Layout from "../components/layout";
import Standings from "../components/standings/standings";
import LastPost from "../components/lastPost/lastPost";
import LastPodcast from "../components/lastPodcast/lastPodcast";
import { useStaticQuery, graphql } from "gatsby";

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <html lang="es">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>Inicio</title>
            </head>
          </html>
        </Helmet>
      </div>
    );
  }
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 1) {
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

      allPodcastRssFeedEpisode(limit: 1) {
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

  return (
    <main>
      <Layout>
        <Banner></Banner>
        <div className="indexGrid">
          <div>
            <Standings></Standings>
          </div>
          <div>
            <LastPost post={data.allMdx.nodes[0]}></LastPost>
          </div>
          <div>
            <LastPodcast
              podcast={data.allPodcastRssFeedEpisode.nodes[0].item}
            ></LastPodcast>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
