import Grid from "@mui/material/Grid";
import PortfolioBalance from "../../components/PortfolioBalance/PortfolioBalance";
import EarningExpenses from "../../components/EarningExpenses/EarningExpenses";
import AyurvedaCard from "../../components/AyurvedaCard/AyurvedaCard";
import NewConnections from "../../components/NewConnections/NewConnections";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import NewsLetterSubscription from "../../components/NewsLetterSubscription/NewsLetterSubscription";
import NewPhotos from "../../components/NewPhotos/NewPhotos";
import FlyingBird from "../../components/FlyingBird/FlyingBird";
import OurOffice from "../../components/OurOffice/OurOffice";
import CurrencyCalculator from "../../components/CurrencyCalculator/CurrencyCalculator";
import WordOfTheDay1 from "../../components/WordOfTheDay1/WordOfTheDay1";
import ProductImage from "../../components/ProductImage/ProductImage";
import ExplorePlaceCard from "../../components/ExplorePlaceCard/ExplorePlaceCard";
import EventInviteConfirmCard from "../../components/EventInviteConfirmCard/EventInviteConfirmCard";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import GoogleNest from "../../components/GoogleNest/GoogleNest";
import CurrentPlan from "../../components/CurrentPlan/CurrentPlan";
import Ideas from "../../components/Ideas/Ideas";
import Documents from "../../components/Documents/Documents";
import CityBgCard from "../../components/CityBgCard/CityBgCard";
import WeeklySales from "../../components/WeeklySales/WeeklySales";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import MarketingCampaign from "../../components/MarketingCampaign/MarketingCampaign";
import CurrentProjectsList from "../../components/CurrentProjectsList/CurrentProjectList";
import NewRequests from "../../components/NewRequests/NewRequests";
import RecentActivites from "../../components/RecentActivities/RecentActivities";
import TaskListExpandable from "../../components/TaskListExpandable/TaskListExpandable";
import DailyFeed from "../../components/DailyFeed/DailyFeed";
import WordOfTheDay from "../../components/WordOfTheDay/WordOfTheDay";
import UserProfileAction from "../../components/UserProfileAction/UserProfileAction";
import SiteVisitors from "../../components/SiteVisitors/SiteVisitors";
import CryptoNews from "../../components/CryptoNews/CryptoNews";
import Summary from "../../components/Summary/Summary";
import Sales from "../../components/Sales/Sales";

const Widgets = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} lg={6}>
        <PortfolioBalance />
      </Grid>
      <Grid item xs={12} lg={6}>
        <EarningExpenses />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <AyurvedaCard height={175} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NewConnections scrollHeight={296} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NewsLetterSubscription />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NewPhotos />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <FlyingBird />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <OurOffice />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CurrencyCalculator />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WordOfTheDay1 />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Summary />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProductImage />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ExplorePlaceCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <EventInviteConfirmCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <UserProfileCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <GoogleNest />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrentPlan />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={3.75}>
          <Grid item xs={12} md={6}>
            <Ideas />
          </Grid>
          <Grid item xs={12} md={6}>
            <Documents />
          </Grid>
          <Grid item xs={12}>
            <CityBgCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklySales />
      </Grid>
      <Grid item xs={12} md={6}>
        <LatestPosts />
      </Grid>
      <Grid item xs={12} md={6}>
        <MarketingCampaign />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrentProjectsList />
      </Grid>
      <Grid item xs={12} md={6}>
        <NewRequests />
      </Grid>
      <Grid item xs={12} md={6}>
        <RecentActivites scrollHeight={304} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TaskListExpandable />
      </Grid>
      <Grid item xs={12} md={6}>
        <DailyFeed scrollHeight={398} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Sales />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WordOfTheDay />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <UserProfileAction />
      </Grid>
      <Grid item xs={12}>
        <SiteVisitors />
      </Grid>
      <Grid item xs={12}>
        <CryptoNews />
      </Grid>
    </Grid>
  );
};

export default Widgets;
