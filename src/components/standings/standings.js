import * as React from "react";
import * as Styles from "./standings.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Standings = () => {
  return (
    <div>
      <div>
        <h3>W Series 2022</h3>
      </div>
      <div className={Styles.standingsGrid}>
        <div className={Styles.titleGrid}>Pos</div>
        <div className={Styles.titleGrid}>No.</div>
        <div className={Styles.titleGrid}>Piloto</div>
        <div className={Styles.titleGrid}>País</div>
        <div className={Styles.titleGrid}>Puntos</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>I</div>
        <div className={Styles.textGrid}>55</div>
        <div className={Styles.textGrid}>Jamie Chadwick</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/reino-unido.png"
            alt="Bandera redondeada Reino Unido"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>125</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>II</div>
        <div className={Styles.textGrid}>49</div>
        <div className={Styles.textGrid}>Abbi Pulling</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/reino-unido.png"
            alt="Bandera redondeada Reino Unido"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>55</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>III</div>
        <div className={Styles.textGrid}>95</div>
        <div className={Styles.textGrid}>Beitske Visser</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/paises-bajos.png"
            alt="Bandera redondeada Holanda"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>53</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>IV</div>
        <div className={Styles.textGrid}>22</div>
        <div className={Styles.textGrid}>Belén García</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/espana.png"
            alt="Bandera redondeada España"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>46</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>V</div>
        <div className={Styles.textGrid}>32</div>
        <div className={Styles.textGrid}>Nerea Marti</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/espana.png"
            alt="Bandera redondeada España"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>44</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>VI</div>
        <div className={Styles.textGrid}>27</div>
        <div className={Styles.textGrid}>Alice Powell</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/reino-unido.png"
            alt="Bandera redondeada Reino Unido"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>43</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>VII</div>
        <div className={Styles.textGrid}>7</div>
        <div className={Styles.textGrid}>Emma Kimilainen</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/finlandia.png"
            alt="Bandera redondeada Finlandia"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>40</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>VIII</div>
        <div className={Styles.textGrid}>21</div>
        <div className={Styles.textGrid}>Jessica Hawkins</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/reino-unido.png"
            alt="Bandera redondeada Reino Unido"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>27</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>IX</div>
        <div className={Styles.textGrid}>5</div>
        <div className={Styles.textGrid}>Fabienne Wohlwend</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/liechtenstein.png"
            alt="Bandera redondeada Liechtenstein"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>20</div>
        <div className={`${Styles.textGrid} ${Styles.textHover}`}>X</div>
        <div className={Styles.textGrid}>19</div>
        <div className={Styles.textGrid}>Marta García</div>
        <div className={Styles.imgFlag}>
          <StaticImage
            src="../../images/flags/espana.png"
            alt="Bandera redondeada España"
            placeholder="tracedSVG"
            layout="fixed"
            width={25}
            height={25}
          ></StaticImage>
        </div>
        <div className={Styles.textGrid}>18</div>
      </div>
    </div>
  );
};

export default Standings;
