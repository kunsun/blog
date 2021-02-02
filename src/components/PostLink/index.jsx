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
    <Link to={`postItem.path`}>
      <div className="post-link">
        <div className="link-header">
          <h4>{postItem.title}</h4>
          <div className="tags">
            {
              postItem.tags ?
              postItem.tags.map((tag, i) => {
                return (
                  <div className="tag" key={i}>#{tag}</div>
                )
              })
              : null
            }
          </div>
        </div>
        <div className="post-time">{postItem.date}</div>
      </div>
    </Link>
  )
}

export default PostLink