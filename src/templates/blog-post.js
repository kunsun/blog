import React from "react"
import Layout from '../components/Layout';
import Header from '../components/Header';
// import Post from '../components/Post';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data
  const { frontmatter, html, body } = mdx
  console.log(html, body)
  return (
    <Layout>
      <Header />
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx (frontmatter: { path: { eq: $path } }) {
      html
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`