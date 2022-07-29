import * as React from "react";
import * as Styles from "./cardPost.module.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CardPost = ({ post }) => {
  return (
      <article key={post.id}>
        <div>
          <GatsbyImage
            className={Styles.imagePosts}
            image={ getImage(post.frontmatter.hero_image) }
            alt={post.frontmatter.hero_image_alt}
          />
          <div className={Styles.posts}>
          <h2>
            <Link className={Styles.titlePosts} to={`/blog/${post.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <div className={Styles.detailsPosts}>
            <p className={Styles.textPosts}>{post.frontmatter.date}</p>
            <p className={Styles.textPosts}>
              <i>&nbsp; |&nbsp;{post.frontmatter.author}</i>
            </p>
          </div>
          <p className={Styles.descriptionPosts}>
            {post.frontmatter.description}
          </p>
          <div>
          <a target="_blank"><Link className={Styles.button} to={`/blog/${post.slug}`}>
              Leer Más
            </Link></a>
          </div>
        </div>
        </div>
      </article>
  );
};

export default CardPost;
