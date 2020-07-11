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
    <div className="post-link">
      {/* <Link to={postItem.path}>
        <h2>{postItem.title}</h2>
        <div className="post-time">{postItem.date}</div>
        <Image post={post} />
      </Link>
        <p>{post.excerpt}</p>
      <Link to={postItem.path}>
        <div className="read-more">...阅读更多</div>
      </Link> */}
      <Link to={postItem.path}>
        <h4>{postItem.title}</h4>
      </Link>
    </div>
  )
}

export default PostLink