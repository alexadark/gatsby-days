/** @jsx jsx */
import { jsx, Box, Styled, Flex } from "theme-ui"

const FeatureCard = ({ card }) => {
  const {
    content,
    title,
    icon: { sourceUrl, altText },
  } = card
  return (
    <Box sx={{ width: ["100%", "33%"], mb: 30 }}>
      <Flex sx={{ justifyContent: `center` }}>
        <img src={sourceUrl} alt={altText} />
      </Flex>
      <Box sx={{ textAlign: `left` }}>
        <Styled.h3 sx={{ textAlign: `center`, fontSize: [1, 2] }}>
          {title}
        </Styled.h3>
        <Styled.root dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Box>
  )
}

export default FeatureCard
