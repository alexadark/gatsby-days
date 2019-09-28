const sharedButtonStyles = {
  border: `none`,
  color: `white`,
  cursor: `pointer`,
  fontFamily: `body`,
  fontWeight: `bold`,
  transition: `all 0.4s ease-in-out`,
  letterSpacing: 1,
  boxShadow: `default`,
  py: `10px`,
  px: `30px`,
  borderRadius: `30px`,
  "&:hover": {
    transform: `translateY(-5px)`,
    boxShadow: `hover`,
  },
}

export default {
  primary: {
    ...sharedButtonStyles,

    bg: `primary`,
    fontSize: 1,
  },
  secondary: {
    ...sharedButtonStyles,

    bg: `secondary`,
    fontSize: 1,
  },
}
