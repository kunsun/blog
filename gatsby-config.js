/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  pathPrefix: '',
  siteMetadata: {
    title: 'kunsun',
    author: 'kunsun',
    desription: 'writing',
    siteUrl: 'https://kunsun.me',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/_posts`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images`,
        }, 
        // {
        //   resolve: 'gatsby-remark-prismjs',
        //   options: {
        //     inlineCodeMarker: '÷',
        //   },
        // }, 
        {
          resolve: `gatsby-remark-vscode`,
          options: {
            theme: 'material-theme',
            extensions: ['material-theme']
            // theme: 'One Dark Pro',
            // extensions: [`${__dirname}/src/themes`]
          }
        }]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('postcss-nested')]
      }
    }
  ]
}

