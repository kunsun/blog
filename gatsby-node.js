const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPost = path.resolve("./src/templates/blog-post.js")

  const blogList = path.resolve("./src/templates/blog-list.js")

  return graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((node, i) => {
      createPage({
        path: i === 0 ? `/` : `/blog/${i + 1}`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    posts.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.path}`,
        component: blogPost,
        context: {
          id: node.id,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({
  stage,
  actions,
  getConfig,
  loaders,
  plugins,
}) => {
  const config = getConfig()
  const miniCssExtractPluginIndex = config.plugins.findIndex(
    (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
  )

  if (miniCssExtractPluginIndex > -1) {
    // remove miniCssExtractPlugin from plugins list
    config.plugins.splice(miniCssExtractPluginIndex, 1)

    // re-add mini-css-extract-plugin
    if (stage === "build-javascript") {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].[contenthash].css`,
          chunkFilename: `[name].[contenthash].css`,
          ignoreOrder: true,
        })
      )
    } else {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].css`,
          chunkFilename: `[id].css`,
          ignoreOrder: true,
        })
      )
    }
  }
  actions.replaceWebpackConfig(config)
}
