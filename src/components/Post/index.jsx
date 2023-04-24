import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import "./index.css"

const Post = ({ frontmatter, body }) => {
  return (
    <div className="blog-post">
      <h2>{frontmatter.title}</h2>
      <div className="post-time">{frontmatter.date}</div>
      {/* <MDXProvider> */}
      {/* <MDXRenderer></MDXRenderer> */}
      {body}
      {/* </MDXProvider> */}
    </div>
  )
}

export default Post
