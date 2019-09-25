/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Image, Box, Flex } from "rebass"

import GatsbyImage from "../GatsbyImage"

const ProjectItem = ({ project }) => {
  const {
    title,
    content,
    projectFields: { projectUrl },
    featuredImage,
    id,
  } = project
  return (
    <Box key={id}>
      <GatsbyImage img={featuredImage} />
      <Styled.h4 sx={{ textAlign: `center`, mb: `10px` }}>{title}</Styled.h4>
      <Flex sx={{ justifyContent: `center`, mb: `30px` }}>
        <a
          sx={{ variant: `buttons.primary` }}
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </Flex>
    </Box>
  )
}

export default ProjectItem
