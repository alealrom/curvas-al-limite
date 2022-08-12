import * as React from "react";
import * as Styles from "./paginationBlog.module.css";
import { Link } from "gatsby";

export const PaginationBlog = ({ currentPage, pageCount }) => (
  <nav className={Styles.pagination}>
    {currentPage > 2 ? (
      <Link className={Styles.buttonPagination} title="Anterior" to={`/blog/page/${currentPage - 1}`}>
        Anterior
      </Link >
    ) : currentPage === 2 ? (
      <Link className={Styles.buttonPagination} title="Anterior" to="/blog">
        Anterior
      </Link>
    ) : (
      <span />
    )}
    {Array.from({ length: pageCount }, (_, i) => (
      <Link className={Styles.numberPagination} key={`${i + 1}`} to={`/blog/${i === 0 ? "" : "page/"+(i + 1)}`}>
        {i + 1}
      </Link>
    ))}
    {currentPage < pageCount ? (
      <Link className={Styles.buttonPagination} title="Siguiente" to={`/blog/page/${currentPage + 1}`}>
        Siguiente
      </Link>
    ) : (
      <span />
    )}
  </nav>
);
