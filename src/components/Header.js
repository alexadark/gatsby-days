/** @jsx jsx */
import {
  jsx,
  Container,
  Header as StyledHeader,
  Box,
  Flex,
  Styled,
} from "theme-ui"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Menu from "./Menu"
import Headroom from "react-headroom"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wpgraphql {
        generalSettings {
          description
          title
        }
      }
    }
  `)

  const { title, description } = data.wpgraphql.generalSettings

  return (
    <Headroom>
      <StyledHeader>
        <Container>
          <h1 sx={{ variant: `text.branding` }}>
            <Link to="/" rel="home">
              {title}
            </Link>
          </h1>
          <Menu />
        </Container>
      </StyledHeader>
    </Headroom>
  )
}

export default Header
