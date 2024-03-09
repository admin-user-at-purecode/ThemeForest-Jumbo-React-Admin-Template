import { Grid } from "@mui/material";
import NewSubscribers from "../../components/NewSubscribers/NewSubscribers";
import NewArticles from "../../components/NewArticles/NewArticles";
import NewAuthors from "../../components/NewAuthors/NewAuthors";
import AvgDailyTraffic from "../../components/AvgDailyTraffic/AvgDailyTraffic";
import PopularAuthors from "../../components/PopularAuthors/PopularAuthors";
import PopularArticles from "../../components/PopularArticles/PopularArticles";
import MarketingCampaign from "../../components/MarketingCampaign/MarketingCampaign";
import Comments from "../../components/Comments/Comments";
import LatestAlerts from "../../components/LatestAlerts/LatestAlerts";
import DailyFeed from "../../components/DailyFeed/DailyFeed";

const NewsDashboard = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} sm={6} lg={3}>
        <NewSubscribers />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <NewArticles headerSx={{ pb: 1.25 }} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <NewAuthors />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <AvgDailyTraffic />
      </Grid>
      <Grid item xs={12} lg={5}>
        <PopularAuthors />
      </Grid>
      <Grid item xs={12} lg={7}>
        <PopularArticles />
      </Grid>
      <Grid item xs={12} md={6}>
        <LatestAlerts />
      </Grid>
      <Grid item xs={12} md={6}>
        <DailyFeed />
      </Grid>
      <Grid item xs={12} md={6}>
        <Comments scrollHeight={450} />
      </Grid>
      <Grid item xs={12} md={6}>
        <MarketingCampaign scrollHeight={430} />
      </Grid>
    </Grid>
  );
};

export default NewsDashboard;
