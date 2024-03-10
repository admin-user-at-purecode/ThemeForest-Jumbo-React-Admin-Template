import { getMarginStyle } from "../../utils/styleHelpers";
import Div from "../Div/Div";
import Backdrop from "../Backdrop/Backdrop";

const Overlay = ({
  opacity,
  margin,
  show,
  color,
  children,
  sx,
  hAlign,
  vAlign,
}) => {
  return (
    <Div
      sx={{
        ...getMarginStyle(margin),
        zIndex: 3,
        position: "absolute",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: hAlign ? hAlign : "stretch",
        justifyContent: vAlign ? vAlign : "stretch",
        ...sx,
      }}
    >
      <Backdrop color={color} opacity={opacity} open={show} />
      <Div sx={{ zIndex: 2, position: "relative" }}>{children}</Div>
    </Div>
  );
};

Overlay.defaultProps = {
  color: "#000000",
  opacity: 0.7,
  show: true,
};

export default Overlay;
