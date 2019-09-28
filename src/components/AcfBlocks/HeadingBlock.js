/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "rebass"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment headingBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_HeadingBlock {
    heading
    type
    cssclass
    anchor
    centered
  }
`

export const HeadingBlock = ({ heading, type, anchor, cssclass, centered }) => {
  const style = centered && { textAlign: `center`, variant: `text.heading` }
  return (
    <Heading
      id={anchor}
      className={cssclass || ""}
      as={type}
      sx={{ textTransform: `uppercase`, ...style }}
    >
      {heading}
    </Heading>
  )
}
