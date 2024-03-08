import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import { Grid, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GrowthGraph from "./GrowthGraph";
import Div from "../Div/Div";
import { cardTitles } from "../../mock_data/cardTitles";

const Growth = () => {
  return (
    <CardQuick title={cardTitles.widgets.title.growth} wrapperSx={{ pt: 1 }}>
      <Grid container spacing={3.75}>
        <Grid item xs={4}>
          <Typography
            variant={"h3"}
            sx={{ color: "success.main", whiteSpace: "nowrap" }}
            mb={0}
          >
            37%
            <TrendingUpIcon
              fontSize={"small"}
              sx={{ verticalAlign: "middle", ml: 1 }}
            />
          </Typography>
          <Typography
            variant={"body1"}
            color={"text.secondary"}
            sx={{ whiteSpace: "nowrap" }}
          >
            This year
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Div sx={{ m: -3, mt: -4 }}>
            <GrowthGraph />
          </Div>
        </Grid>
      </Grid>
    </CardQuick>
  );
};

export default Growth;
