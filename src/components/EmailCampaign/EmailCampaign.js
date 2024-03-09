import React from "react";
import { Typography } from "@mui/material";
import { TrendingDown } from "@mui/icons-material";
import OnlineSignupChart from "../OnlineSignups/OnlineSignupChart";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const EmailCampaign = () => {
  return (
    <CardQuick
      title={
        <Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>
          9,257
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"common.white"} mb={0}>
          {cardTitles.widgets.subheader.emailCampaign}
        </Typography>
      }
      action={
        <Typography variant={"body1"}>
          3.6%{" "}
          <TrendingDown
            sx={{ verticalAlign: "middle", fontSize: "1rem", ml: 0.5 }}
          />
        </Typography>
      }
      reverse
      sx={{ color: "common.white", borderTop: "4px solid #F39711" }}
      bgColor={["#f9cc8a", "#f39711"]}
      wrapperSx={{ pb: 0 }}
    >
      <OnlineSignupChart />
    </CardQuick>
  );
};

export default EmailCampaign;
