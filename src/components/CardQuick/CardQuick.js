import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import Backdrop from "../Backdrop/Backdrop";
import { getBgColorStyle, getBgImageStyle } from "../../utils/stylehelpers";

const CardQuick = ({
  title,
  subheader,
  avatar,
  action,
  bgColor,
  bgImage,
  bgGradientDir,
  headerSx,
  footerProps,
  noWrapper,
  wrapperSx,
  backdrop,
  backdropColor,
  backdropOpacity,
  reverse,
  divider,
  sx,
  children,
  ...restProps
}) => {
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    if (bgImage) {
      setBgStyle(getBgImageStyle(bgImage));
    } else if (bgColor) {
      setBgStyle(getBgColorStyle(bgColor, bgGradientDir));
    } else {
      setBgStyle({});
    }
  }, [bgColor, bgImage, bgGradientDir]);

  return (
    <Card sx={{ ...bgStyle, position: "relative", ...sx }} {...restProps}>
      {/* <Backdrop
        color={backdropColor}
        opacity={backdropOpacity}
        open={backdrop}
      /> */}
      {(action || title || avatar) && !reverse && (
        <CardHeader
          title={title}
          subheader={subheader}
          action={action}
          avatar={avatar}
          sx={{
            zIndex: 2,
            position: "relative",
            ...headerSx,
          }}
        />
      )}
      {noWrapper ? (
        children
      ) : (
        <CardContent sx={{ ...wrapperSx, zIndex: 2, position: "relative" }}>
          {children}
        </CardContent>
      )}
      {(action || title || avatar) && reverse && (
        <CardHeader
          title={title}
          subheader={subheader}
          action={action}
          avatar={avatar}
          sx={{
            zIndex: 2,
            position: "relative",
            borderBottomColor: (theme) => theme.palette.divider,
            ...headerSx,
          }}
        />
      )}
    </Card>
  );
};

CardQuick.defaultProps = {
  backdropColor: "#000000",
  backdropOpacity: "0.7",
  backdrop: false,
  reverse: false,
  divider: false,
  noWrapper: false,
  headerSx: {},
};

export default CardQuick;
