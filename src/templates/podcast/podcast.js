import * as React from "react";
import "./podcast.css";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import CardPodcast from "../../components/cardPodcast/cardPodcast";
import { PaginationPodcast } from "../../components/paginationPodcast/paginationPodcast";

const PodcastPage = (props) => {
  const data = props.data;
  const pageContext = props.pageContext;

  return (
    <Layout pageTitle={"Podcast"}>
      <section class="podcastGrid">
        {" "}
        {data.allPodcastRssFeedEpisode.nodes.map((node) => {
          return <CardPodcast podcast={node.item}></CardPodcast>;
        })}
      </section>
      <PaginationPodcast
        pageCount={pageContext.numberOfPages}
        currentPage={pageContext.humanPageNumber}
      />
    </Layout>
  );
};

export default PodcastPage;

export const data = graphql`
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
`;
