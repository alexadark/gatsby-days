/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment contentBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ContentBlock {
    content
    cssclass
    anchor
  }
`

export const ContentBlock = ({ content, anchor, cssclass }) => (
  <Styled.root
    id={anchor}
    className={cssclass || ""}
    dangerouslySetInnerHTML={{ __html: content }}
    sx={{
      width: `l`,
      mx: `auto`,
      mb: 7,
      mt: 5,
    }}
  />
)
