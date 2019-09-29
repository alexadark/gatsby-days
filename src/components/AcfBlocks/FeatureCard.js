/** @jsx jsx */
import { jsx, Box, Styled, Flex } from "theme-ui"

const FeatureCard = ({ card }) => {
  const {
    content,
    title,
    icon: { sourceUrl, altText },
  } = card
  return (
    <Box sx={{ width: ["100%", "50%", "33%"], mb: 30 }}>
      <Flex sx={{ justifyContent: `center` }}>
        <img src={sourceUrl} alt={altText}  />
      </Flex>
      <Box sx={{ textAlign: `left`, variant: `card.default`, mx: `20px`, p: `20px !important`, borderTop: `5px solid teal` }}>
        <Styled.h3 sx={{ textAlign: `center`, fontSize: [0, 1],textTransform: `uppercase`,fontFamily: `body`, color: `primary`, fontWeight: 600 }}>
          {title}
        </Styled.h3>
        <Styled.root dangerouslySetInnerHTML={{ __html: content }} sx={{li:{listStyleType: `none`, mb: 2}}} />
      </Box>
    </Box>
  )
}

export default FeatureCard
