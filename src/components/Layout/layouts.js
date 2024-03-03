import VerticalDefault from "../vertical-default/VerticalDefault";

const LAYOUT_NAMES = {
  VERTICAL_DEFAULT: "vertical-default",
};

const LAYOUTS = [
  {
    name: LAYOUT_NAMES.VERTICAL_DEFAULT,
    label: "Vertical Default",
    component: VerticalDefault,
  },
];

export default LAYOUT_NAMES;
export { LAYOUTS };
