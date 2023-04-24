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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/_posts`,
        name: `pages`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        // plugins: [
        // {
        //   resolve: `gatsby-remark-vscode`,
        //   options: {
        //     theme: 'material-theme',
        //     extensions: ['material-theme']
        //   }
        // }]
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("postcss-nested")],
      },
    },
  ],
}
