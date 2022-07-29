import * as React from "react";
import CardPost from "../cardPost/cardPost";

const LastPost = ({ post }) => {
  return (
    <div>
      <h3>Último Post</h3>
      <CardPost post={post}></CardPost>
    </div>
  );
};

export default LastPost;
