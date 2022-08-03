import * as React from "react";
import "./about.css";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";;

const AboutMePage = () => {
  return (
    <Layout pageTitle={"Sobre Mí"}>
      <section className="aboutGrid">
        <div className="aboutImage">
          <StaticImage
            src="../images/Alejandra_Alvarez_Romero.png"
            alt="Foto perfil Alejandra Álvarez Romero"
            placeholder="dominantColor"
          ></StaticImage>
        </div>
        <div>
          <h1 className="aboutTitle">! Hola, soy Ale !</h1>
          <p className="aboutBody">
            Aliquam sem lacus, posuere id dictum sit amet, ultricies in arcu.
            Sed pretium justo ac nibh commodo luctus. Donec iaculis dictum dui,
            nec euismod odio placerat vitae. Nulla commodo augue ac enim
            scelerisque, vel tempor mi cursus. Donec id congue tortor, sed
            ornare risus. Ut at arcu turpis. Donec felis augue, facilisis eu
            venenatis aliquam.
          </p>
          <p className="aboutPhrase">Eso es porque el éxito</p>
          <div className="aboutDetails">
            <p className="phraseCursive">
              <span>es un trabajo interno.</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMePage;
