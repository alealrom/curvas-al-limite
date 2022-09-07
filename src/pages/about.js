import * as React from "react";
import "./about.css";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutMePage = () => {
  return (
    <Layout pageTitle={"Sobre Mí"}>
      <section className="aboutGrid">
        <div className="aboutImage">
          <StaticImage
            src="../images/Alejandra_Alvarez_Romero.jpg"
            alt="Foto perfil Alejandra Álvarez Romero"
            placeholder="dominantColor"
          ></StaticImage>
        </div>
        <div>
          <h1 className="aboutTitle">! Hola, soy Ale !</h1>
          <p className="aboutBody">
            Mi pasión por el deporte del automovilismo, empezó con la <b>Fórmula 1</b> del año 2001 cuando muy a la madrugada sintonizaba la televisión
            para ver correr nada y nada menos que al máximo exponente de
            Colombia ese año en este deporte, <a href="http://jpmontoya.com/"><b>Juan Pablo Montoya</b></a>.</p> 
            <p className="aboutBody">
            El amor continuo así durante unos años más, viendo coronarse campeones a
            grandes pilotos como a los alemanes <i>Michael Schumacher</i> y <i>Sebastian
            Vettel</i>, al español <i>Fernando Alonso</i>, al británico <i>Lewis Hamilton</i> y al
            actual campeón el neerlandés <i>Max Vertstappen</i>.</p> 
            <p className="aboutBody">
            Fue ahí viendo esa lista de grandes campeones, que empecé a cuestionarme <b><i>¿por qué no
            hay mujeres pilotos en la Fórmula 1?</i></b></p>
            <p className="aboutBody">
            Siempre he pensado como mujer que tener referentes mujeres en cualquier disciplina, genera en las
            mujeres, especialmente en las niñas una gran admiración; llegando
            estás grandes mujeres a convertirse en más ni menos que en un modelo
            a seguir.</p>
            <p className="aboutBody">Y es ahí, donde quiero aportar mi granito de arena y
            mostrarle a está mundo digitalizado que una mujer puede llegar a ser
            grande, incluso en un deporte de élite como lo es el automovilismo.</p>
            <p className="aboutBody">Hoy por hoy tengo a grandes mujeres de referentes en el deporte del
            automovilismo, ellas se llevan toda mi admiración y no puedo dejar
            de nombrar a la colombiana que lleva la tricolor a lo más alto de la
            Fórmula 2 la bogotana Tatiana Calderón.
          </p>
        </div>
      </section>
      <section>
      <p className="aboutPhrase">Eso es porque el éxito</p>
          <div className="aboutDetails">
            <p className="phraseCursive">
              <span>es un trabajo interno.</span>
            </p>
          </div>
      </section>
    </Layout>
  );
};

export default AboutMePage;
