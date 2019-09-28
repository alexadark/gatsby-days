import { tailwind } from "@theme-ui/presets"
const darkBlue = "rgba(12, 44, 64, 1)"
const lightBlue = "rgba(96, 159, 166, 1)"
const beige = "rgba(242, 214, 162, 1)"
const light = "rgba(245, 245, 245, 1)"
const {
  gray,
  red,
  orange,
  yellow,
  green,
  teal,
  blue,
  indigo,
  purple,
  pink,
} = tailwind.colors

export default {
  ...tailwind.colors,

  primary: teal[6],
  secondary: purple[7],
  background: gray[1],
  accent: pink[6],
  beige: beige,
  text: darkBlue,
  brand: `primary`,
  mutted: gray[5],
  grey: gray[6],
}
