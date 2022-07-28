import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <h1>{data.mdx.frontmatter.title}</h1>
            <p>{data.mdx.frontmatter.date}</p>
            <p><i>{data.mdx.frontmatter.author}</i></p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
                />
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const data = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                author
                date(locale: "es", formatString: "DD MM YYYY")
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
    }`

export default BlogPost