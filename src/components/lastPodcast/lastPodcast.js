import * as React from "react";
import * as Styles from "./lastPodcast.module.css";
import { Link } from "gatsby";

const LastPodcast = ({ podcast }) => {
  return (
    <div className={Styles.containerPodcast}>
      <h3>Podcast</h3>
      <div>
        <img className={Styles.imagePodcast} src={podcast.itunes.image}></img>
        <div className={Styles.podcast}>
          <h2 className={Styles.titlePodcast}>{podcast.title}</h2>
          <p className={Styles.datePodcast}>{podcast.isoDate} </p>
          <p className={Styles.summaryPodcast}>{podcast.itunes.summary}</p>
          <div>
            <audio
              controls
              src={podcast.enclosure.url}
              type={podcast.enclosure.type}
            ></audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPodcast;
