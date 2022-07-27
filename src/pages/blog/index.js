import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ }) => {
    return (
       <Layout>
       </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    author
                    date(formatString: "MM/DD/YYYY")
                    description
                    title
            }
            id
            slug
           }
        }
    }
`

export default BlogPage