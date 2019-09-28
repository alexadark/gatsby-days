export default {
  backgroundColor: `white`,
  // variant: `gradients.primary`,
  color: "white",
  fontWeight: "bold",
  margin: `none`,
  boxShadow: `small`,
  ">div": {
    display: [`block`, `flex`],
    justifyContent: `space-between`,
    fontSize: 3,
    margin: "0 auto",
    maxWidth: "container",
    py: 6,
    width: "90vw",
  },
  ".headroom--pinned &": {
    ">div": {
      py: 3,
    },
    h1: {
      fontSize: 3,
    },
  },
}
