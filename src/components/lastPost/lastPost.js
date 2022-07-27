import * as React from "react";
import * as Styles from "./lastPost.module.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LastPost = ({ post }) => {
  return (
    <div>
      <h3>Último Post</h3>
      <article key={post.id}>
        <div>
          <GatsbyImage
            className={Styles.imagePost}
            image={ getImage(post.frontmatter.hero_image) }
            alt={post.frontmatter.hero_image_alt}
          />
          <div className={Styles.post}>
          <h2>
            <Link className={Styles.titlePost} to={`/blog/${post.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <div className={Styles.detailsPost}>
            <p className={Styles.textPost}>{post.frontmatter.date}</p>
            <p className={Styles.textPost}>
              <i>&nbsp; |&nbsp;{post.frontmatter.author}</i>
            </p>
          </div>
          <p className={Styles.descriptionPost}>
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
    </div>
  );
};

export default LastPost;
