/** @jsx jsx */
import { jsx, Styled, Flex, Container } from "theme-ui"
import { Separator } from "../ui-components"
import FeatureCard from "./FeatureCard"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment featuresBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_FeaturesBlock {
    content
    title
    cssclass
    anchor
    cards {
      content
      title
      icon {
        ...GatsbyImageQuery
      }
    }
  }
`

export const FeaturesBlock = ({ content, title, cards, cssclass, anchor }) => {
  return (
    <div className={cssclass || ""} id={anchor}>
      <Styled.h3 sx={{ variant: `text.heading` }}>{title}</Styled.h3>
      <Container sx={{ maxWidth: `l` }}>
        <Styled.root
          sx={{ textAlign: `center` }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
      <Flex sx={{ flexWrap: `wrap`, mt: 50, justifyContent: `center` }}>
        {cards && cards.map(card => <FeatureCard card={card} />)}
      </Flex>
    </div>
  )
}
