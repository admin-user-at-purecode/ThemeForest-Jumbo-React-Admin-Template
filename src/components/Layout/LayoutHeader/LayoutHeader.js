import React from "react";
import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {
  useLayoutSidebar,
  useLayoutHeader,
  useHeaderTheme,
} from "../../../hooks/hooks";

const LayoutHeader = ({ children, sx }) => {
  const { sidebarOptions } = useLayoutSidebar();
  const { headerOptions } = useLayoutHeader();
  const { headerTheme } = useHeaderTheme();

  const extraSx = React.useMemo(() => {
    if (sx) {
      const { width, ml, transition, zIndex, ...restSx } = sx;
      return restSx;
    }
  }, [sx]);

  const headerMarginLeft = React.useMemo(() => {
    if (!headerOptions.fixed) {
      return 0;
    }
  }, [headerOptions?.fixed]);

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar
        elevation={0}
        position={headerOptions?.fixed ? "fixed" : "relative"}
        sx={{
          width: { sm: `calc(100% - ${headerMarginLeft}px)` },
          ml: { sm: `${headerMarginLeft}px` },
          transition: (theme) => theme.transitions.create(["width"]),
         
        }}
      >
        <Toolbar sx={{ height: "100%", px: { lg: 6, xs: 4 } }}>
          {children}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default LayoutHeader;
