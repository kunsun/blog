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
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [`.md`, `.mdx`],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-highlight-code`,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/_posts`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              // theme: "vscode",
            },
          },
        ],
      },
    },
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
