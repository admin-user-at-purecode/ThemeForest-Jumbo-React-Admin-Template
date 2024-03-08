import React from "react";
import { Grid } from "@mui/material";
import Properties from "../../components/Properties/Properties";
import Cities from "../../components/Cities/Cities";
import VisitsStatistics from "../../components/VisitsStatistics/VisitsStatistics";
import QueriesStatistics from "../../components/QueriesStatistics/QueriesStatistics";
import PopularAgents from "../../components/PopularAgents/PopularAgents";
import CurrentPlan from "../../components/CurrentPlan/CurrentPlan";
import DealsAnalytics from "../../components/DealsAnalytics/DealsAnalytics"
import PropertiesList from "../../components/PropertiesList/PropertiesList";
import RecentActivities1 from "../../components/RecentActivities1/RecentActivities1";

const ListingDashboard = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} sm={6} lg={3}>
        <Properties />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Cities />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <VisitsStatistics />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <QueriesStatistics />
      </Grid>
      <Grid item xs={12}>
        <PopularAgents />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrentPlan />
      </Grid>
      <Grid item xs={12} md={6}>
        <DealsAnalytics />
      </Grid>
      <Grid item xs={12} lg={8}>
        <PropertiesList />
      </Grid>
      <Grid item xs={12} lg={4}>
        <RecentActivities1 scrollHeight={556} />
      </Grid>
    </Grid>
  );
};

export default ListingDashboard;
