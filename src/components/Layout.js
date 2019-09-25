/** @jsx jsx */
import { jsx, Layout as StyledLayout, Container } from "theme-ui"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"
import { Grommet } from "grommet"
import theme from "../gatsby-plugin-theme-ui"
import "../styles/scss/styles.scss"

const Layout = ({ children }) => (
  <Grommet theme={theme} plain>
    <Global styles={GlobalStyles} />
    <StyledLayout>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </StyledLayout>
  </Grommet>
)

export default Layout
