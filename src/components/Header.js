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
    <StyledHeader id="masthead" className="site-header">
      <Container>
        <Styled.h1>
          <Link to="/" rel="home">
            {title}
          </Link>
        </Styled.h1>
        <Menu />
      </Container>
    </StyledHeader>
  )
}

export default Header
