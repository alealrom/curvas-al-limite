import * as React from "react";
import { Link } from "gatsby";
import * as Styles from "./banner.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Banner = () => {
  return (
    <div>
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
            <div className={`${Styles.bannerText} ${Styles.bannerTextPosition1}`}>Ale</div>
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
            <div className={`${Styles.bannerText} ${Styles.bannerTextPosition2}`}>Ale</div>
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
            <div className={`${Styles.bannerText} ${Styles.bannerTextPosition1}`}>Ale</div>
            </div>
          </Link>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
