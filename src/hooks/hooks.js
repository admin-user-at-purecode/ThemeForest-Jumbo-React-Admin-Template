import React from "react";
import {
  AppContext,
  ThemeHeaderContext,
  LayoutHeaderContext,
  LayoutSidebarContext,
  ThemeSidebarContext,
  ThemeContext,
} from "../Context/context";

export const useApp = () => {
  return React.useContext(AppContext);
};

export const useHeaderTheme = () => {
  return React.useContext(ThemeHeaderContext);
};

export const useLayout = () => {
  const { setSidebarOptions } = useLayoutSidebar();
  const { setHeaderOptions } = useLayoutHeader();

  const setLayoutOptions = (layoutOptions) => {
    setSidebarOptions(layoutOptions?.sidebar);
    setHeaderOptions(layoutOptions?.header);
  };

  return { setLayoutOptions };
};

export const useLayoutHeader = () => {
  return React.useContext(LayoutHeaderContext);
};

export const useLayoutSidebar = () => {
  return React.useContext(LayoutSidebarContext);
};

export const useSidebarTheme = () => {
  return React.useContext(ThemeSidebarContext);
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
