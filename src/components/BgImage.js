/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

const BgImage = ({ img, height }) =>
  img && (
    <BackgroundImage
      fluid={img.imageFile.childImageSharp.fluid}
      alt={img.altText}
      tag="div"
      sx={{
        width: `100%`,
        height,
        backGroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}
    ></BackgroundImage>
  )

export default BgImage

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
