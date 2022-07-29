import * as React from "react";
import * as Styles from "../blog/{mdx.slug}.module.css";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <section className={Styles.containerPost}>
        <h1 className={Styles.titlePost}>{data.mdx.frontmatter.title}</h1>
        <div className={Styles.tagTextPost}>
          <p>Por: &nbsp;</p>
          <p className={Styles.textPost}>
            <i>{data.mdx.frontmatter.author}</i>
          </p>
          <p>&nbsp; | &nbsp;</p>
          <p className={Styles.textPost}>
            <i>{data.mdx.frontmatter.date}</i>
          </p>
        </div>
        <GatsbyImage
          className={Styles.imagePost}
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <div className={Styles.bodyPost}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
        <a target="_blank">
          <Link className={Styles.button} to="/blog/">
            Volver
          </Link>
        </a>
      </section>
    </Layout>
  );
};

export const data = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        author
        date(locale: "es", formatString: "DD MMMM YYYY")
        title
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
