import colors from "./colors"
import buttons from "./buttons"
import menus from "./menus"
import text from "./text"
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
  },
  shadows: {
    default: `0px 1px 10px rgba(0,0,0,0.05)`,
    hover: `0px 10px 20px rgba(0,0,0,0.25)`,
  },

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
    Header: {
      backgroundColor: "white",
      color: "text",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
      maxWidth: `container`,
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
  global: {
    colors,
  },
}
