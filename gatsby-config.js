/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  /* Your site config here */
  pathPrefix: "",
  siteMetadata: {
    title: "kunsun",
    author: "kunsun",
    desription: "writing",
    siteUrl: "https://kunsun.me",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/_posts`,
        name: `pages`,
      },
    },
    `gatsby-remark-images`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
