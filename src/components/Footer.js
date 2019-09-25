/** @jsx jsx */
import {
  jsx,
  Container,
  Footer as StyledFooter,
  Box,
  Flex,
  Styled,
} from "theme-ui"

const Footer = () => (
  <StyledFooter>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </StyledFooter>
)

export default Footer
