import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
      <Image post={post} />
    </Link>
  </div>
)

export default PostLink