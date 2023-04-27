import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Post from "../components/Post"
import { graphql } from "gatsby"

export default function Template({ data }) {
  console.log({ data })
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Header />
      <Post frontmatter={frontmatter} body={html} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

// mdx {
//   body
//   frontmatter {
//     date(formatString: "MMMM DD, YYYY")
//     path
//     title
//   }
// }

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

// allMarkdownRemark {
//   edges () {
//     node(id: {eq: $id}) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// }
