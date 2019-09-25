/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export const Separator = ({ my }) => (
  <div
    sx={{
      width: `100px`,
      height: `2px`,
      mx: `auto`,
      my,
      bg: `primary`,
    }}
  ></div>
)
