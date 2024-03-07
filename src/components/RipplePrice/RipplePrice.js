import React from "react";
import Typography from "@mui/material/Typography";
import CardQuick from "../CardQuick/CardQuick";
import { TrendingUp } from "@mui/icons-material";
import OnlineSignupChartFilled from "./OnlineSignupChartFilled";
import cardTitles from "../../mock_data/cardTitles";

const RipplePrice = () => {
  const { t } = useTranslation();
  return (
    <CardQuick
      title={
        <Typography variant={"h3"} color={"common.white"}>
          $9,626
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"common.white"} mb={0}>
          {cardTitles.widgets.subheader.ripplePrice}
        </Typography>
      }
      action={
        <Typography variant={"body1"}>
          6%{" "}
          <TrendingUp
            sx={{ verticalAlign: "middle", fontSize: "1rem", ml: 0.5 }}
          />
        </Typography>
      }
      sx={{ color: "common.white" }}
      bgColor={"#E44A77"}
      wrapperSx={{ pt: 0 }}
    >
      <OnlineSignupChartFilled color={"#fff"} shadowColor={"#000000"} />
    </CardQuick>
  );
};

export default RipplePrice;
