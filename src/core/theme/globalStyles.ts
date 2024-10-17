// ** MUI Imports
import { Theme } from "@mui/material/styles";

const GlobalStyles = (theme: Theme) => {
  return {
    html: {
      padding: 0,
      margin: 0,
    },
    body: {
      padding: 0,
      margin: 0,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
  };
};

export default GlobalStyles;
