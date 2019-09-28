import colors from "./colors"
import buttons from "./buttons"
import menus from "./menus"
import text from "./text"
import card from "./card"
import gradients from "./gradients"
import Header from "./header"
import Footer from "./footer"
import { fonts, fontSizes, fontWeights, lineHeights, base } from "./typo"

export default {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  text,
  gradients,
  buttons,
  menus,
  card,
  sizes: {
    container: 1024,
    s: 300,
    m: 600,
    l: 900,
  },
  shadows: {
    small: `0px 1px 10px rgba(0,0,0,0.05)`,
    default: `0px 5px 12px rgba(0,0,0,0.15)`,
    medium: `0px 5px 15px rgba(0,0,0,0.25)`,
    hover: `0px 10px 20px rgba(0,0,0,0.45)`,
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
    Footer,
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
