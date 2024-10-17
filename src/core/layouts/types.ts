import { Settings } from "../context/settingsContext";
import { ReactNode } from "react";

export type ContentWidth = "full" | "boxed";

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type NavSectionTitle = {
  sectionTitle: string;
  action?: string;
  subject?: string;
};

export type LayoutProps = {
  hidden: boolean;
  settings: Settings;
  children: ReactNode;
  saveSettings: (values: Settings) => void;
  footerContent?: (props?: any) => ReactNode;
  verticalAppBarContent?: (props?: any) => ReactNode;
  verticalNavMenuContent?: (props?: any) => ReactNode;
  verticalNavMenuBranding?: (props?: any) => ReactNode;
  afterVerticalNavMenuContent?: (props?: any) => ReactNode;
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode;
};
