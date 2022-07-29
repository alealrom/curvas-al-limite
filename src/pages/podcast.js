import * as React from "react";
import "./podcast.css";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import CardPodcast from "../components/cardPodcast/cardPodcast";

const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query {
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

  return (
    <Layout pageTitle={"Podcast"}>
      <section class="podcastGrid">
        {" "}
        {data.allPodcastRssFeedEpisode.nodes.map((node) => {
          return <CardPodcast podcast={node.item}></CardPodcast>;
        })}
      </section>
    </Layout>
  );
};

export default PodcastPage;
