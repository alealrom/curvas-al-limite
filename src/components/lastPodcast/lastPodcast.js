import * as React from "react";
import CardPodcast from "../cardPodcast/cardPodcast";

const LastPodcast = ({ podcast }) => {
  return (
    <div>
      <h3>Podcast</h3>
      <CardPodcast podcast={podcast}></CardPodcast>
    </div>
  );
};

export default LastPodcast;
