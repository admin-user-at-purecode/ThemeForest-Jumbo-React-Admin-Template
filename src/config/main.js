import { LAYOUT_CONTAINER_STYLES } from "../utils/constants/layout";
import LAYOUT_NAMES from "../components/Layout/layouts";
import { createTheme } from "../utils/systemHelpers";
import { footerTheme } from "../Theme/themes/footer/default";
import { mainTheme } from "../Theme/themes/main/default";
import { headerTheme } from "../Theme/themes/header/default";
import { sidebarTheme } from "../Theme/themes/sidebar/default";

const config = {
    defaultLayout: LAYOUT_NAMES.VERTICAL_DEFAULT,
    containerStyle: LAYOUT_CONTAINER_STYLES.FLUID,
    theme: createTheme(mainTheme, headerTheme, sidebarTheme, footerTheme),
};

export {config};