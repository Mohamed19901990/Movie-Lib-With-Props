/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      // dark: 'red',
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
