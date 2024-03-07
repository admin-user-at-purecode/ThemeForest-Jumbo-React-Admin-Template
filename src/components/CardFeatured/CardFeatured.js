import Stack from "@mui/material/Stack";
import Div from "../Div/Div";
import CardQuick from "../CardQuick/CardQuick";

const CardFeatured = ({
  sx,
  tick,
  tickSx,
  direction,
  spacing,
  showTick,
  children,
  bgColor,
  bgImage,
  imgSrc,
  imgAlt,
  imgSx,
  imgFit,
  backdrop,
  backdropOpacity,
  backdropColor,
  ...restProps
}) => {
  const tickAlign = ["column", "column-reverse"].includes(direction)
    ? { m: "0 auto 16px" }
    : {};

  return (
    <CardQuick
      bgColor={bgColor}
      bgImage={bgImage}
      backdrop={backdrop}
      backdropOpacity={backdropOpacity}
      backdropColor={backdropColor}
      noWrapper
    >
      <Stack direction={direction} spacing={spacing} {...restProps}>
        <Div sx={{ p: 3 }}>
          {showTick &&
            (tick ? (
              tick
            ) : (
              <Div
                sx={{
                  width: 24,
                  height: 4,
                  bgcolor: "grey.500",
                  borderRadius: 4,
                  ...tickAlign,
                  ...tickSx,
                }}
              />
            ))}
          {children}
        </Div>
        {imgSrc && (
          <Div
            sx={{
              position: "relative",
              overflow: "hidden",
              height: 175,
              "& > img": {
                ...(imgFit
                  ? {
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                      objectPosition: "center",
                    }
                  : {}),
              },
              ...imgSx,
            }}
          >
            <img src={imgSrc} alt={imgAlt} />
          </Div>
        )}
      </Stack>
    </CardQuick>
  );
};

CardFeatured.defaultProps = {
  imgFit: true,
  imgAlt: "",
};

export default CardFeatured;
