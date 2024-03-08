import { createContext } from "react";
export const LayoutHeaderContext = createContext({});
export const LayoutSidebarContext = createContext({});
export const ThemeContext = createContext({});
export const ThemeHeaderContext = createContext();
export const ThemeSidebarContext = createContext();
export const RqListContext = createContext({
  queryOptions: {},
  pagination: { page: 0, limit: -1 },
  data: [],
  selectedItems: [],
  selectedOnPage: [],
  multiSelection: false,
  hasBulkActions: false,
});
