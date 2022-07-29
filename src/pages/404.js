import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Oswald, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 400,
  fontSize: "2.5rem",
  letterSpacing: "1.5px",
};

const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.3rem",
};

const buttonStyle = {
  padding: "16px",
  backgroundColor: "#5d1372",
  color: "#ffffff",
  borderRadius: "4px",
  textDecoration: "none",
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>No Encontrada</title>
      <h1 style={headingStyles}>Página no encontrada</h1>
      <p style={paragraphStyles}>
        Lo sentimos{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        no pudimos encontrar lo que estabas buscando.
        <br />
        <br />
        <br />
        <br />
        <Link style={buttonStyle} to="/">
          INICIO
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
