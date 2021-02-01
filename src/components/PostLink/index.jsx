import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import './index.css'

const Image = ({post}) => {
  return (
    <div>
      <Img
        sizes={post.frontmatter.banner.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}

const PostLink = ({ post }) => {
  const postItem = post.frontmatter;
  return (
    <Link to={postItem.path}>
      <div className="post-link">
        <h4>{postItem.title}</h4>
        <div className="post-time">{postItem.date}</div>
      </div>
    </Link>
  )
}

export default PostLink