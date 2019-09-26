import colors from "./colors"
import buttons from "./buttons"
import menus from "./menus"
import text from "./text"
import Header from "./header"
import { fonts, fontSizes, fontWeights, lineHeights, base } from "./typo"

export default {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  text,
  sizes: {
    container: 1024,
    s: 300,
    m: 600,
    l: 900,
  },
  shadows: {
    default: `0px 1px 10px rgba(0,0,0,0.05)`,
    hover: `0px 10px 20px rgba(0,0,0,0.25)`,
  },
  space: [0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100],

  breakpoints: [`600px`, `900px`, `1200px`],
  radii: {
    xl: `1rem`,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "text",
    },
    Header,
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
      py: 10,
    },
    Container: {
      maxWidth: `container`,
      m: `0 auto`,
    },
    ...base,

    root: base,
  },
  buttons,
  menus,
  //grommet
  accordion: {
    heading: {
      level: 2,
    },
  },
  layer: {
    extend: {
      // position: `absolute`,
    },
  },
  global: {
    colors,
  },
}
