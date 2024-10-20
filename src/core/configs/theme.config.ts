import { PaletteMode } from "@mui/material";
import { ContentWidth } from "../layouts/types";

type ThemeConfig = {
  mode: PaletteMode;
  templateName: string;
  routingLoader: boolean;
  disableRipple: boolean;
  navigationSize: number;
  menuTextTruncate: boolean;
  contentWidth: ContentWidth;
  responsiveFontSizes: boolean;
};

const themeConfig: ThemeConfig = {
  templateName: "Connect",
  mode: "light",
  contentWidth: "boxed",
  routingLoader: true,
  menuTextTruncate: true,
  navigationSize: 260,
  responsiveFontSizes: true,
  disableRipple: false,
};

export default themeConfig;
