const sharedButtonStyles = {
  border: `none`,
  color: `white`,
  cursor: `pointer`,
  fontFamily: `body`,
  fontWeight: `bold`,
  transition: `all 0.4s ease-in-out`,
  letterSpacing: 1,
  boxShadow: `md`,
  "&:hover": {
    transform: `translateY(-5px)`,
    boxShadow: `hover`,
  },
}

export default {
  primary: {
    ...sharedButtonStyles,
    borderRadius: 5,
    bg: `primary`,
    fontSize: 1,
    px: 2,
    py: 1,
  },
  secondary: {
    ...sharedButtonStyles,
    borderRadius: 5,
    bg: `secondary`,
    fontSize: 1,
    px: 2,
    py: 1,
  },
}
