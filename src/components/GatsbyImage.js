import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const GatsbyImage = ({ img, customStyles, className }) =>
  img && (
    <Img
      fluid={img.imageFile.childImageSharp.fluid}
      alt={img.altText}
      className={className}
    />
  )

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
