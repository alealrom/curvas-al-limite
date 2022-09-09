import * as React from "react";
import * as Styles from "./banner.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Banner = () => {
  return (
    <main>
      <div className={Styles.bannerGrid}>
        <div>
          <Link to="/blog/tatiana-calderon-en-la-formula-2/">
            <StaticImage
              className={Styles.bannerImage}
              src="../../images/Tatiana_Calderon.png"
              alt="Tatiana Calderón uniforme Fórmula 2."
              placeholder="tracedSVG"
            />
            <div className={Styles.containerBannerText}>
              <div
                className={`${Styles.bannerText} ${Styles.bannerTextPosition1}`}
              >
                Tata
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#">
            <StaticImage
              className={`${Styles.bannerImageBig} ${Styles.bannerImage}`}
              src="../../images/CAL_Spotify.png"
              alt="Card promoción Curvas Al Límite en"
              placeholder="tracedSVG"
            />
            <div className={Styles.containerBannerText}>
              <div
                className={`${Styles.bannerText} ${Styles.bannerTextPosition2}`}
              >
                Cal
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#">
            <StaticImage
              className={Styles.bannerImage}
              src="../../images/W_Series.png"
              alt="Monoplaza W Series Racing."
              placeholder="tracedSVG"
            />
            <div className={Styles.containerBannerText}>
              <div
                className={`${Styles.bannerText1} ${Styles.bannerTextPosition3}`}
              >
                W Series
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Banner;
