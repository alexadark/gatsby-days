/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useState } from "react"
import { Box, Flex } from "rebass"
import GatsbyImage from "../GatsbyImage"
import { LinkedinOption, Twitter, Close } from "grommet-icons"
import { Layer } from "grommet"
import { Separator } from "../ui-components"

const TeamMember = ({
  member: {
    bio,
    intro,
    linkedin,
    twitter,
    name,
    picture,

    className,
  },
}) => {
  const [show, setShow] = useState()
  return (
    <Box>
      <GatsbyImage img={picture} className="memberPic" />
      <Box sx={{ textAlign: `center` }}>
        <Styled.h5>{name}</Styled.h5>
        <Box sx={{ lineHeight: `1.3`, m: `5px`, fontSize: 1 }}>{intro}</Box>
      </Box>
      <Flex sx={{ justifyContent: `center`, div: { mx: 2 } }}>
        <Box>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinOption color="#1279B3" />
          </a>
        </Box>
        <Box>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <Twitter color="#2BA3EF" />
          </a>
        </Box>
      </Flex>
      <Flex sx={{ justifyContent: `center`, mt: `15px` }}>
        <Box
          sx={{ variant: `buttons.secondary` }}
          onClick={() => setShow(true)}
        >
          Bio
        </Box>
      </Flex>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          full="true"
          sx={{
            padding: `80px`,
            bg: `secondary`,
            color: `white`,
          }}
        >
          <Close
            onClick={() => setShow(false)}
            sx={{ position: `absolute`, top: 20, right: 20 }}
            color="white"
          />
          <Flex sx={{ justifyContent: `center`, mb: `40px` }}>
            <GatsbyImage img={picture} className="memberPic" />
          </Flex>
          <Styled.h3
            dangerouslySetInnerHTML={{ __html: name }}
            sx={{
              textAlign: `center`,
              color: `white`,
              textTransform: `uppercase`,
              m: 0,
            }}
          />
          <Separator my="40px" />
          <Styled.root
            dangerouslySetInnerHTML={{ __html: bio }}
            sx={{ color: `white`, fontFamily: `body` }}
          />
        </Layer>
      )}
    </Box>
  )
}

export default TeamMember
