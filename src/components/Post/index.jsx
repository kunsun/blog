import React from 'react';
import './index.css';

const Post = ({ frontmatter, html }) => {
  return (
    <div className="blog-post">
      <h2>{frontmatter.title}</h2>
      <div className="post-time">{frontmatter.date}</div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export default Post;