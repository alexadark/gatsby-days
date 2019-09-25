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
        <Flex sx={{ justifyContent: `space-between`, alignItems: `center` }}>
          <h1 sx={{ variant: `text.branding` }}>
            <Link to="/" rel="home">
              {title}
            </Link>
          </h1>
          <Menu />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
