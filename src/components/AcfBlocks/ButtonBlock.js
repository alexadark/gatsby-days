/** @jsx jsx */
import { jsx } from "theme-ui"
import { Button, Flex, Box } from "rebass"
import { graphql, Link } from "gatsby"

export const fragment = graphql`
  fragment buttonBlockFragment on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ButtonBlock {
    variant
    cssclass
    anchor
    position
    button {
      target
      title
      url
    }
  }
`

export const ButtonBlock = ({
  cssclass,
  anchor,
  variant,
  button,
  position,
}) => {
  const { title, target, url } = button
  const style =
    position === "center"
      ? { justifyContent: `center` }
      : position === "left"
      ? { justifyContent: `start` }
      : { justifyContent: `end` }
  return (
    <Flex sx={style}>
      <Box>
        <Button
          id={anchor}
          className={cssclass || ""}
          variant={variant || "primary"}
          button={button}
        >
          {target === "_blank" ? (
            <a href={url} target="_blank">
              {title}
            </a>
          ) : (
            <Link to={url}>{title}</Link>
          )}
        </Button>
      </Box>
    </Flex>
  )
}
