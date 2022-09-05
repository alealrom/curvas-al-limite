import * as React from "react";
import * as Styles from "./cardPodcast.module.css";

const CardPodcast = ({ podcast }) => {
  return (
    <div>
      <img
        className={Styles.imagePodcast}
        src={podcast.itunes.image}
        alt="Imagen tema de referencia episodio podcast"
      ></img>
      <div className={Styles.podcast}>
        <h2 className={Styles.titlePodcast}>{podcast.title}</h2>
        <p className={Styles.datePodcast}>{podcast.isoDate} </p>
        <p className={Styles.summaryPodcast}>{podcast.itunes.summary}</p>
        <div>
          <audio
            controls
            src={podcast.enclosure.url}
            type={podcast.enclosure.type}
          >
          </audio>
        </div>
      </div>
    </div>
  );
};

export default CardPodcast;
