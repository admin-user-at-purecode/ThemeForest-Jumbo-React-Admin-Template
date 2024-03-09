import { CardHeader, Typography } from "@mui/material";
import Div from "../Div/Div";
import Backdrop from "../Backdrop/Backdrop";
import { getBgColorStyle, getBgImageStyle } from "../../utils/styleHelpers";
import { useMemo } from "react";

const renderTitle = (title) => {
  if (typeof title === "string") {
    return (
      <Typography component={"h4"} color={"#fff"}>
        {title}
      </Typography>
    );
  }
  return title;
};

const Content = ({
  avatar,
  title,
  subheader,
  action,
  bgColor,
  bgImage,
  backdrop,
  backdropColor,
  backdropOpacity,
  sx,
  children,
}) => {
  const bgStyle = useMemo(() => {
    if (bgImage) {
      return getBgImageStyle(bgImage);
    } else if (bgColor) {
      return getBgColorStyle(bgColor);
    }
    return {};
  }, [bgColor, bgImage]);

  return (
    <Div sx={{ ...sx, position: "relative", ...bgStyle }}>
      {(avatar || title || action) && (
        <CardHeader
          avatar={avatar}
          title={renderTitle(title)}
          subheader={subheader}
          action={action}
          sx={{
            position: "relative",
            zIndex: 3,
          }}
        />
      )}
      {backdrop && (
        <Backdrop
          color={backdropColor}
          opacity={backdropOpacity}
          open={backdrop}
        />
      )}
      <Div sx={{ zIndex: 2, position: "relative" }}>{children}</Div>
    </Div>
  );
};

export default Content;
