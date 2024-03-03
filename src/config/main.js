import { createTheme } from "../utils/systemHelpers";
import { mainTheme } from "../Theme/themes/main/default";
import { headerTheme } from "../Theme/themes/header/default";
import { sidebarTheme } from "../Theme/themes/sidebar/default";

const config = {
  theme: createTheme(mainTheme, headerTheme, sidebarTheme),
};

export { config };