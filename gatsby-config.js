const autoprefixer = require("autoprefixer")
const config = require("./config")
// const wpUrl = process.env.GATSBY_WP_URL

module.exports = {
  siteMetadata: {
    title: `My Gatsby Blog with wpgraphql`,
    description: `My awesome blog`,
    Author: `Alexandra Spalato`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${config.wordPressUrl}/graphql`,
      },
    },
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: `${config.wordPressUrl}`,
        uploadsUrl: `${config.wordPressUrl}/wp-content/uploads/`,
        processPostTypes: ["Page", "Post", "Projects"],
        graphqlTypeName: "WPGraphQL",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-style-guide`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          autoprefixer({
            overrideBrowserslist: ["last 2 versions"],
          }),
        ],
      },
    },
  ],
}
