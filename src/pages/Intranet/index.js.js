import React from "react";
import { Grid } from "@mui/material";
import RecentActivities from "../../components/RecentActivities/RecentActivities";
import TaskListExpandable from "../../components/TaskListExpandable/TaskListExpandable";
import MarketingCampaign from "../../components/MarketingCampaign/MarketingCampaign";
import WeeklySales from "../../components/WeeklySales/WeeklySales";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import PageViews from "../../components/PageViews/PageViews";
import Orders from "../../components/Orders/Orders";
import CurrentProjectList from "../../components/CurrentProjectsList/CurrentProjectList";
import MarkerClustererExample from "../../components/MarkerClusterer/MarkerClusterer";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import HeaderChartComponent from "../../components/HeaderChartComponent/HeaderChartComponent";
import Visits from "../../components/Visits/Visits";
import UserPhotos from "../../components/UserPhotos/UserPhotos";
import LatestAlerts from "../../components/LatestAlerts/LatestAlerts";
import DailyFeed from "../../components/DailyFeed/DailyFeed";
import PopularArticles from "../../components/PopularArticles/PopularArticles";

const IntranetDashboard = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12}>
        <HeaderChartComponent />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3.75}>
          <Grid item xs={12} lg={7}>
            <Grid container spacing={3.75}>
              <Grid item xs={12} sm={6}>
                <PageViews />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Orders />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Visits />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <UserProfileCard />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <PopularArticles scrollHeight={423} />
      </Grid>
      <Grid item xs={12} md={6}>
        <RecentActivities scrollHeight={342} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrentProjectList scrollHeight={341} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DailyFeed scrollHeight={400} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TaskListExpandable scrollHeight={395} />
      </Grid>
      <Grid item xs={12} md={6}>
        <MarketingCampaign scrollHeight={428} />
      </Grid>
      <Grid item xs={12} md={6}>
        <LatestAlerts scrollHeight={385} />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklySales />
      </Grid>
      <Grid item xs={12} md={6}>
        <UserPhotos />
      </Grid>
      <Grid item xs={12}>
        <MarkerClustererExample isExample={false} />
      </Grid>
      <Grid item xs={12}>
        <PopularProducts />
      </Grid>
    </Grid>
  );
};

export default IntranetDashboard;
