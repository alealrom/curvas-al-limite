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
          <h1 className="aboutTitle">
            “La velocidad una sensación de libertad”
          </h1>
          <p className="aboutBody">
            Puedo decir que la <b>velocidad</b> para mí es una forma de expresar
            y sentir la <b>libertad</b>. Desde que tengo uso de razón la
            velocidad es algo que siempre ha captado mi atención.
          </p>
          <p className="aboutBody">
            La velocidad permite tener la libertad de ir a al lugar que se
            elija, sentir el viento rozar el rostro y es una especie de
            catarsis, que permite dejar atrás las cosas a máxima velocidad.
          </p>
          <h2 className="aboutSubtitle">
            ¿Y dónde quedan los deportes de motor?
          </h2>
          <p className="aboutBody">
            Mi pasión por el deporte del automovilismo, empezó con la{" "}
            <b>Fórmula 1</b> del año 2001 cuando muy a la madrugada sintonizaba
            la televisión para ver correr nada y nada menos que al máximo
            exponente de Colombia ese año en este deporte,{" "}
            <a target="_blank" rel="noreferrer" href="http://jpmontoya.com/">
              <b>Juan Pablo Montoya</b>
            </a>
            .
          </p>
          <p className="aboutBody">
            El amor continuo así durante unos años más, viendo coronarse
            campeones a grandes pilotos como a los alemanes{" "}
            <i>Michael Schumacher</i>, <i>Sebastian Vettel</i> y Nico Rosberg,
            al español <i>Fernando Alonso</i>, al filándes o mejor conocido como
            "The Iceman" Kimi Räikkönen, al británico <i>Lewis Hamilton</i> y al
            actual campeón el neerlandés <i>Max Vertstappen</i>.
          </p>
        </div>
      </section>
      <div>
        <p className="aboutPhrase">“Cuando llevas el casco puesto</p>
        <div className="aboutDetails">
          <p className="phraseCursive">
            <span>nadie sabe si eres hombre o mujer.”</span>
          </p>
        </div>
        <p className="authorPhrase">Balba Camino, piloto española</p>
      </div>
      <section className="moreAboutGrid">
        <div>
          <h2 className="aboutSubtitle">¿Por qué Curvas al Límite?</h2>
          <p className="aboutBody">
            <b>
              <i>Curvas al Límite</i>
            </b>
            , nació de cuestionarme{" "}
            <b>¿por qué no hay mujeres pilotos en la Fórmula 1?</b>
          </p>
          <p className="aboutBody">
            Siempre he pensado como mujer que tener referentes mujeres en
            cualquier disciplina, genera en las mujeres, especialmente en las
            niñas una gran admiración; llegando estás grandes mujeres a
            convertirse en más ni menos que en un modelo a seguir.
          </p>
          <p className="aboutBody">
            Y es ahí, donde quiero aportar mi granito de arena y mostrarle a
            este mundo digitalizado que una mujer puede llegar a ser grande,
            incluso en un deporte de élite como lo es el automovilismo.
          </p>
          <p className="aboutBody">
            Hoy por hoy tengo a grandes mujeres de referentes en el deporte del
            automovilismo, ellas se llevan toda mi admiración. Una de ellas es
            sin duda alguna la colombiana que lleva la tricolor a lo más alto de
            la Fórmula 2, la bogotana{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://es.tatianacalderon.com/"
            >
              <b>Tatiana Calderón</b>
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="aboutSubtitle">Diez cositas sobre mí:</h2>
          <ul className="aboutList">
            <li className="aboutBody">
              Soy Comunicadora Social – Periodista. Con gran pasión por el
              desarrollo front-end, la escritura y el aprendizaje autónomo.
            </li>
            <li className="aboutBody">
              Mi animal favorito en el mundo son las <b>mariposas</b>.
            </li>
            <li className="aboutBody">
              Viví con ocho personas mi mamá Tere, su esposo Faber, mi tía
              Tina, mi prima Nata, su hijo Samuel, mi abue Mary y mi Juanito.
            </li>
            <li className="aboutBody">
              Comparto la pasión por el automovilismo con mi novio Robert.
            </li>
            <li className="aboutBody">
              Me encanta leer, desde muy niña leía sin saber leer. Me gustan los
              libros sobre mundos fantásticos y series criminales.
            </li>
            <li className="aboutBody">
              Espero algún día conocer mi ciudad favorita, <b>Londres</b>.
            </li>
            <li className="aboutBody">
              Me gusta ver el “behind the scene” de las películas y series.{" "}
            </li>
            <li className="aboutBody">
              Me gusta la repostería. Mi último postre fue una torta de banano
              con mermelada casera de mora. ¡Very yummy!
            </li>
            <li className="aboutBody">Soy muy sensible, se me pueden aguar los ojos con un libro, una película o una acción de alguien.</li>
            <li className="aboutBody">
              Tengo un perrito “Canelo” y un gatico “Morty”.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMePage;
