const sharedStyles = {
  display: `flex`,
}

export default {
  header: {
    ...sharedStyles,
    alignItems: [`start`, `end`],
    ul: {
      display: `flex`,
      justifyContent: [`start`, `end`],
      p: 0,
      m: 0,
      ">li": {
        pr: `20px`,
        "&:last-child": {
          pr: 0,
        },
        a: {
          textDecoration: `none`,
          textTransform: `uppercase`,
          color: `text`,
          fontSize: 1,
          fontWeight: 400,
          letterSpacing: `1.5px`,
          border: `none`,
          "&:hover, &:active": {
            color: `primary`,
          },
        },
      },
    },
  },
  pagination: {
    ...sharedStyles,
    justifyContent: `space-between`,
    alignItems: `center`,
    fontSize: 1,
    pr: 50,
    mb: 40,
    ".mutted": {
      color: `mutted`,
    },
  },
  prevNextLinks: {
    textTransform: `uppercase`,
    fontSize: 0,
    letterSpacing: `1px`,
    a: {
      pb: `5px`,
      color: `text`,
    },
  },
  pageNumbers: {
    a: {
      p: `5px 10px`,
      variant: `gradients.secondary`,
      borderRadius: `100%`,
      color: `white`,
      border: `none`,
      mr: `5px`,
      transition: `all .4s ease-in-out`,
      boxShadow: `default`,
      display: `inline-block`,
      "&:hover": {
        transform: `translateY(-3px)`,
        boxShadow: `hover`,
      },
      '&[aria-current="page"]': {
        variant: `gradients.primary`,
      },
    },
  },
}
