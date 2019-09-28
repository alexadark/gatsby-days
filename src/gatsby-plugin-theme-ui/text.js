export default {
  branding: {
    fontSize: [3, 4, 4],
    textTransform: `uppercase`,
    // fontFamily: `heading`,
    fontWeight: 400,
    letterSpacing: `2px`,

    m: 0,
    a: {
      color: `text`,

      "&:hover": {
        color: `primary`,
      },
    },
  },
  heading: {
    textTransform: `uppercase`,
    variant: `gradients.secondary`,
    color: `white`,
    py: 4,
    px: 4,
    fontWeight: 300,
    borderRadius: `5px`,
  },
}
