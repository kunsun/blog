import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx"
import './index.css';

const Post = ({ frontmatter, body }) => {
  return (
    <div className="blog-post">
      <h2>{frontmatter.title}</h2>
      <div className="post-time">{frontmatter.date}</div>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </div>
  )
}

export default Post;