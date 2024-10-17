// ** React Imports
import { ReactNode } from "react";

// ** MUI Imports
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

// ** Type Imports
import { Settings } from "../context/settingsContext";

// ** Theme Config
import themeConfig from "../configs/theme.config";

import typography from "./typography";

// ** Theme
import themeOptions from "./ThemeOptions";

// ** Global Styles
import GlobalStyling from "./globalStyles";

interface Props {
  settings: Settings;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { settings, children } = props;
  const coreThemeConfig = themeOptions(settings);
  let theme = createTheme(coreThemeConfig);
  theme = createTheme(theme, {
    typography: { ...typography(theme) },
  });

  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
