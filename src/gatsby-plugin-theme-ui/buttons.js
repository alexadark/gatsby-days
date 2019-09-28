const sharedButtonStyles = {
  border: `none`,
  color: `white`,
  cursor: `pointer`,
  fontFamily: `body`,
  textTransform: `uppercase`,
  fontSize: 0,
  transition: `all 0.4s ease-in-out`,
  letterSpacing: 1,
  boxShadow: `medium`,
  py: `12px`,
  px: `40px`,
  borderRadius: `100px`,
  "&:hover": {
    transform: `translateY(-5px)`,
    boxShadow: `hover`,
  },
  a: {
    color: `white`,
  },
}

export default {
  primary: {
    ...sharedButtonStyles,

    variant: `gradients.primary`,
    fontSize: 1,
  },
  secondary: {
    ...sharedButtonStyles,

    variant: `gradients.secondary`,
    fontSize: 1,
  },
}
