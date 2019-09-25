/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Box, Flex } from "rebass"
import { Separator } from "../ui-components"
import Project from "./ProjectItem"
import Carousel from "nuka-carousel"
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
    <Box id={anchor} className={cssclass || ""}>
      <Box sx={{ textAlign: `center` }}>
        <Styled.h3 dangerouslySetInnerHTML={{ __html: title }} />
        <Separator my="40px" />
        <Styled.h5 dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Box>
          <Styled.root dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
      </Box>
      <Carousel
        slidesToShow={3}
        cellSpacing={20}
        autoplay={true}
        infiniteLoop={true}
        sx={{ mt: 50 }}
      >
        {projects.map(project => (
          <Project project={project} />
        ))}
      </Carousel>
    </Box>
  )
}
