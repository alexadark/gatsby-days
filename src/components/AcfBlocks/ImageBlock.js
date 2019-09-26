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
    <Box id={anchor} className={cssclass || ""}>
      <GatsbyImg img={image} />
    </Box>
  )
}
