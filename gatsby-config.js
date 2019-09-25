const autoprefixer = require("autoprefixer")
const config = require("./config")
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
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
