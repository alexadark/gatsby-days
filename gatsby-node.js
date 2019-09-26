const { createRemoteFileNode } = require("gatsby-source-filesystem")

const createPosts = require(`./create/createPosts`)
const createSitePages = require(`./create/createSitePages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createSitePages({ actions, graphql })
}

/**
 * Download WordPress images, add them to GraphQL schema.
 * @link https://www.gatsbyjs.org/docs/node-apis/#createResolvers
 * @link https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=#createremotefilenode
 */
exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
