import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/PostLink"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Paginator from "../components/Paginator"
import "../css/blog_list.css"

const BlogList = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Header />
      <div className="post-list">
        {Posts}
        <Paginator {...pageContext} />
      </div>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          date
          title
          tags
          banner {
            childImageSharp {
              fluid(maxWidth: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 180)
      }
    }
  }
`
