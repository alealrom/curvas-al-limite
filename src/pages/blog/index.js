import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";
import CardPost from "../../components/cardPost/cardPost";
import *  as Styles from "../blog/index.module.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 1000) {
        nodes {
          id
          slug
          frontmatter {
            author
            date(locale: "es", formatString: "DD MMMM YYYY")
            description
            title
            hero_image_alt
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle={"Blog"}>
      <section className={Styles.blogGrid}>
        {" "}
        {data.allMdx.nodes.map((post) => {
          return <CardPost post={post}></CardPost>;
        })}
      </section>
    </Layout>
  );
};

export default BlogPage;
