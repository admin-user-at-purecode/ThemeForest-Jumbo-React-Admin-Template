import VerticalDefault from "../vertical-default/VerticalDefault";
import {
  SIDEBAR_ANCHOR_POSITIONS,
  SIDEBAR_VARIANTS,
  SIDEBAR_STYLES,
  SIDEBAR_VIEWS,
} from "../../utils/constants/layout";

const LAYOUT_NAMES = {
  VERTICAL_DEFAULT: "vertical-default",
  SOLO_PAGE: "solo-page",
};

const LAYOUTS = [
  {
    name: LAYOUT_NAMES.VERTICAL_DEFAULT,
    label: "Vertical Default",
    component: VerticalDefault,
    layoutOptions: {
      sidebar: {
        hide: false,
        variant: SIDEBAR_VARIANTS.PERSISTENT,
        style: SIDEBAR_STYLES.FULL_HEIGHT,
        view: SIDEBAR_VIEWS.FULL,
        anchor: SIDEBAR_ANCHOR_POSITIONS.LEFT,
      },
      header: {
        hide: false,
        fixed: true,
      }
    },
  },
];

export default LAYOUT_NAMES;
export { LAYOUTS };
