import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556ccd",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red[400],
    },
  },
});

export default theme;
