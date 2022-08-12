import * as React from "react";
import * as Styles from "../blog/index.module.css";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import CardPost from "../../components/cardPost/cardPost";
import { PaginationBlog } from "../../components/paginationBlog/paginationBlog";

const BlogPage = (props) => {
  const data = props.data;
  const pageContext = props.pageContext;

  return (
    <Layout pageTitle={"Blog"}>
      <section className={Styles.blogGrid}>
        {" "}
        {data.allMdx.nodes.map((post) => {
          return <CardPost post={post}></CardPost>;
        })}
      </section>
      <PaginationBlog
        pageCount={pageContext.numberOfPages}
        currentPage={pageContext.humanPageNumber}
      />
    </Layout>
  );
};

export default BlogPage;

export const data = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`;
