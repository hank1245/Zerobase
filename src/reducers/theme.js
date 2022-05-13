const theme = (state = "darkTheme", action) => {
  switch (action.type) {
    case "dark":
      return "darkTheme"
    case "light":
      return "lightTheme"
  }
  return state
}

export default theme
