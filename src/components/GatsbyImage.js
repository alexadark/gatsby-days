/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const GatsbyImage = ({ img }) =>
  img && <Img fluid={img.imageFile.childImageSharp.fluid} alt={img.altText} />

export default GatsbyImage

export const query = graphql`
  fragment GatsbyImageQuery on WPGraphQL_MediaItem {
    altText
    sourceUrl
    imageFile {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
