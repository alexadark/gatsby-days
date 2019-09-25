import React from "react"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment imageBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ImageBlock {
    cssclass
    anchor
    image {
      ...GatsbyImageQuery
    }
  }
`

export const ImageBlock = () => {
  return (
    <div>
      <h3>Image Block</h3>
    </div>
  )
}
