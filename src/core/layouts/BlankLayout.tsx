// ** MUI Imports
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import React from "react";

// Styled component for Blank Layout component
const BlankLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: "100vh",

  // For V1 Blank layout pages
  "& .content-center": {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
  },

  // For V2 Blank layout pages
  "& .content-right": {
    display: "flex",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
  },
}));

const BlankLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <BlankLayoutWrapper>
      <Box
        sx={{ minHeight: "100vh", overflowX: "hidden", position: "relative" }}
      >
        {children}
      </Box>
    </BlankLayoutWrapper>
  );
};

export default BlankLayout;
