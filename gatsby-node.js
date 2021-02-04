const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blog-post.js');

  const blogList = path.resolve('./src/templates/blog-list.js');

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then( result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMdx.edges;
    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({length: numPages}).forEach((node, i) => {
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
      })
    })
  })
} 

