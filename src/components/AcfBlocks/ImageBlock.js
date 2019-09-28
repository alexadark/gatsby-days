/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import { graphql } from "gatsby"
import GatsbyImg from "../GatsbyImage"

export const fragment = graphql`
  fragment imageBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ImageBlock {
    cssclass
    anchor
    image {
      ...GatsbyImageQuery
    }
  }
`

export const ImageBlock = ({ cssclass, anchor, image }) => {
  return (
    <Box
      id={anchor}
      className={cssclass || ""}
      sx={{
        ".gatsby-image-wrapper": {
          borderRadius: `10px`,
          maxHeight: 400,
          maxWidth: 700,

          boxShadow: `default`,
          mx: `auto`,
          my: 10,
        },
      }}
    >
      <GatsbyImg img={image} />
    </Box>
  )
}
