import { useContext } from "react";
import {
  ThemeHeaderContext,
  LayoutHeaderContext,
  LayoutSidebarContext,
  ThemeSidebarContext,
  ThemeContext,
} from "../Context/context";


export const useHeaderTheme = () => {
  return useContext(ThemeHeaderContext);
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
  return useContext(LayoutHeaderContext);
};

export const useLayoutSidebar = () => {
  return useContext(LayoutSidebarContext);
};

export const useSidebarTheme = () => {
  return useContext(ThemeSidebarContext);
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
