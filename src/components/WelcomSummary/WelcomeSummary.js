import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import GeneralInfo from "./components/GeneralInfo";
import SiteVisitsGraph from "./components/SiteVisitsGraph";
import SiteAudienceInfo from "./components/SiteAudienceInfo";
import { Grid } from "@mui/material";
import { cardTitles } from "../../mock_data/cardTitles";

const WelcomeSummary = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.welcomeEMA}
      wrapperSx={{ pt: 1 }}
    >
      <Grid container spacing={3.75}>
        <Grid item xs={12} sm={6} lg={3}>
          <GeneralInfo />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} sx={{ order: { lg: 3 } }}>
          <SiteAudienceInfo />
        </Grid>
        <Grid item xs={12} lg={6}>
          <SiteVisitsGraph />
        </Grid>
      </Grid>
    </CardQuick>
  );
};

export default WelcomeSummary;
