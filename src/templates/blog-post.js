import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Post from "../components/Post"
import { graphql } from "gatsby"

export default function Template({ data, children }) {
  console.log({ data, children })
  const { mdx } = data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      {/* <Header /> */}
      <Post frontmatter={frontmatter} body={body} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mdx {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

// mdx(frontmatter: { path: { eq: $path } }) {
//   body
//   frontmatter {
//     date(formatString: "MMMM DD, YYYY")
//     path
//     title
//   }
// }

// allMdx {
//   nodes {
//     frontmatter {
//       title
//       slug
//       date(formatString: "MMMM DD, YYYY")
//     }
//   }
// }
