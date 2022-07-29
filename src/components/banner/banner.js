import * as React from "react";
import * as Styles from "./banner.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Banner = () => {
  return (
    <main>
      <div className={Styles.bannerGrid}>
        <div>
          <Link to="#">
            <StaticImage
              className={Styles.bannerImage}
              src="../../images/redbull.jpg"
              alt="Logo Formula M"
              placeholder="tracedSVG"
            />
            <div className={Styles.containerBannerText}>
              <div
                className={`${Styles.bannerText} ${Styles.bannerTextPosition1}`}
              >
                Ale
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#">
            <StaticImage
              className={`${Styles.bannerImageBig} ${Styles.bannerImage}`}
              src="../../images/redbull.jpg"
              alt="Logo Formula M"
              placeholder="tracedSVG"
            />
            <div className={Styles.containerBannerText}>
              <div
                className={`${Styles.bannerText} ${Styles.bannerTextPosition2}`}
              >
                Ale
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#">
            <StaticImage
              className={Styles.bannerImage}
              src="../../images/redbull.jpg"
              alt="Logo Formula M"
              placeholder="tracedSVG"
            />
            <div className={Styles.containerBannerText}>
              <div
                className={`${Styles.bannerText} ${Styles.bannerTextPosition1}`}
              >
                Ale
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Banner;
