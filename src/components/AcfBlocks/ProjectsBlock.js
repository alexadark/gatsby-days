/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { Box, Flex } from "rebass"
import { Separator } from "../ui-components"
import Project from "./ProjectItem"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment projectsBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ProjectsBlock {
    subtitle
    title
    content
    cssclass
    anchor
    projects {
      ... on WPGraphQL_Project {
        id
        featuredImage {
          ...GatsbyImageQuery
        }
        slug
        title
        uri
        projectFields {
          projectUrl
        }
      }
    }
  }
`

export const ProjectsBlock = ({
  cssclass,
  anchor,
  content,
  title,
  subtitle,
  projects,
}) => {
  return (
    <Box id={anchor} className={cssclass || ""} sx={{ my: 10 }}>
      <Box sx={{ textAlign: `center` }}>
        <Styled.h3
          dangerouslySetInnerHTML={{ __html: title }}
          sx={{
            variant: `text.heading`,
          }}
        />

        <Styled.h4
          dangerouslySetInnerHTML={{ __html: subtitle }}
          sx={{ textAlign: `center`, mb: 0 }}
        />
        <Box>
          <Container sx={{ maxWidth: `l` }}>
            <Styled.root
              dangerouslySetInnerHTML={{ __html: content }}
              sx={{ textAlign: `center` }}
            />
          </Container>
        </Box>
      </Box>
      <Flex sx={{ flexWrap: `wrap`, justifyContent: `center`, my: 10 }}>
        {projects.map(project => (
          <Project project={project} />
        ))}
      </Flex>
    </Box>
  )
}
