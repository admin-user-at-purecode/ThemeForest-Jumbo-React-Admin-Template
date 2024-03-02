import { Grid } from "@mui/material";
import SalesOverview from "../../components/SalesOverview/SalesOverview";
import Documents1 from "../../components/Documents1/Documents1";
import Ideas1 from "../../components/Ideas1/Ideas1";
import UserOrders from "../../components/UserOrders/UserOrders";
import UserSummary from "../../components/UserSummary/UserSummary";
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard";
import UserProfileCard1 from "../../components/UserProfileCard1/UserProfileCard1";
import NewConnections from "../../components/NewConnections/NewConnections";
import RecentActivities from "../../components/RecentActivities/RecentActivities";
import LastMonthSales from "../../components/LastMonthSales/LastMonthSales";
import OnlineSignupsFilled from "../../components/OnlineSignupsFilled/OnlineSignupsFilled";
import NewVisitorsThisMonth from "../../components/NewVisitorsThisMonth/NewVisitorsThisMonth";
import TotalRevenueThisYear from "../../components/TotalRevenueThisYear/TotalRevenueThisYear";
import UpgradePlan from "../../components/UpgradePlan/UpgradePlan";
import SalesReport1 from "../../components/SalesReport1/SalesReport1";
import WordOfTheDay from "../../components/WordOfTheDay/WordOfTheDay";
import OurOffice1 from "../../components/OurOffice1/OurOffice1";
import UserProfileAction from "../../components/UserProfileAction/UserProfileAction";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import ProjectsListCard from "../../components/ProjectsListCard/ProjectsListCard";
import ProductImage from "../../components/ProductImage/ProductImage";
import ExplorePlaceCard from "../../components/ExplorePlaceCard/ExplorePlaceCard";
import MarkerClusterer from "../../components/maps/MarkerClusterer";
import AppUsers from "../../components/AppUsers/AppUsers";
import CafeStore1 from "../../components/CafeStore1/CafeStore1";
import LatestAlerts from "../../components/LatestAlerts/LatestAlerts";
import DailyFeed from "../../components/DailyFeed/DailyFeed";

const MiscDashboard = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} lg={7}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} lg={2}>
        <Grid container spacing={3.75}>
          <Grid item xs={12} sm={6} lg={12}>
            <Documents1 />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <Ideas1 />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Grid container spacing={3.75}>
          <Grid item xs={12} sm={6} lg={12}>
            <UserOrders />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <UserSummary />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <LatestAlerts />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <DailyFeed />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <ScheduleCard />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UserProfileCard1 />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NewConnections />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <RecentActivities />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <LastMonthSales />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <OnlineSignupsFilled />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <NewVisitorsThisMonth />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TotalRevenueThisYear />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UpgradePlan />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SalesReport1 />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <AppUsers />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <WordOfTheDay />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <OurOffice1 />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <UserProfileAction height={282} />
      </Grid>
      <Grid item xs={12} lg={8}>
        <PopularProducts />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProjectsListCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProductImage height={370} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CafeStore1 />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ExplorePlaceCard height={450} />
      </Grid>
      {
        <Grid item xs={12}>
          <MarkerClusterer isExample={false} />
        </Grid>
      }
    </Grid>
  );
};

export default MiscDashboard;
