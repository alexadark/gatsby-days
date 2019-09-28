export default {
  primary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.red[5]}, ${t.colors.purple[6]})`,
  },
  secondary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.secondary}, ${t.colors.teal[4]})`,
  },
}
