/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  // siteMetaData: {
  //   title: 'kunsun',
  //   author: 'kunsun',
  //   desription: 'writing',
  //   siteUrl: 'https://kunsun.me',
  // },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/_posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images`,
        }]
      }
    },
    // `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
}

