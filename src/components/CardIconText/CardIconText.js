import { Avatar, CardActions, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Div from "../Div/Div";

const CardIconText = ({
  variant,
  icon,
  title,
  subTitle,
  color,
  height,
  hideArrow,
  ...restProps
}) => {
  const avatarProps =
    variant === "contained"
      ? {
          bgcolor: color,
          transition: "all 0.3s ease-in-out",
          color: "common.white",
        }
      : {
          bgcolor: "common.white",
          transition: "all 0.3s ease-in-out",
          border: "1px solid",
          borderColor: color,
          color: color,
        };

  return (
    <Card {...restProps}>
      <CardActions
        disableSpacing
        sx={{
          p: 0,
          alignItems: "stretch",
          position: "relative",
          height: height,
        }}
      >
        <Div
          sx={{
            display: "flex",
            width: 95,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            sx={{
              ...avatarProps,
            }}
          ></Avatar>
        </Div>
        <CardContent sx={{ p: 2.5, flex: 1, alignSelf: "center" }}>
          {title && (
            <Typography variant={"h2"} fontWeight={"500"} mb={0.5}>
              {title}
            </Typography>
          )}
          {subTitle && (
            <Typography variant={"h5"} color={"text.primary"}>
              {subTitle}
            </Typography>
          )}
        </CardContent>
        {!hideArrow && (
          <Div
            className="CardAction-arrow"
            sx={{
              right: "0",
              top: "50%",
              color: "primary.main",
              position: "absolute",
              transition: "all 0.3s ease",
              transform: "translate(100%, -50%)",
            }}
          >
            <ArrowForwardOutlinedIcon />
          </Div>
        )}
      </CardActions>
    </Card>
  );
};

CardIconText.defaultProps = {
  height: 116,
  color: "primary.main",
  variant: "contained",
};

export default CardIconText;
