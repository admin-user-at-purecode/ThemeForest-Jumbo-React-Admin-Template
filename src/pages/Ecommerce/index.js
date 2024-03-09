import { Grid } from "@mui/material";
import SalesReport from "../../components/SalesReport/SalesReport";
import OrdersReport from "../../components/OrdersReport/OrdersReport";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import MarketingCampaign from "../../components/MarketingCampaign/MarketingCampaign";
import SiteVisitors from "../../components/SiteVisitors/SiteVisitors";
import LastMonthSales from "../../components/LastMonthSales/LastMonthSales";
import OnlineSignupsFilled from "../../components/OnlineSignupsFilled/OnlineSignupsFilled";
import NewVisitorsThisMonth from "../../components/NewVisitorsThisMonth/NewVisitorsThisMonth";
import TotalRevenueThisYear from "../../components/TotalRevenueThisYear/TotalRevenueThisYear";
import SalesStatistics from "../../components/SalesStatistics/SalesStatistics";
import YearlyProfileReport from "../../components/YearlyProfitReport/YearlyProfileReport";
import AppUsers from "../../components/AppUsers/AppUsers";
import OnlineVisitors from "../../components/OnlineVisitors/OnlineVisitors";
import WebsiteTraffic from "../../components/WebsiteTraffic/WebsiteTraffic";
import LatestAlerts from "../../components/LatestAlerts/LatestAlerts";

const EcommerceDashboard = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12}>
        <SalesStatistics />
      </Grid>
      <Grid item xs={12} md={6}>
        <SalesReport />
      </Grid>
      <Grid item xs={12} md={6}>
        <YearlyProfileReport />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <AppUsers />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <OnlineVisitors />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <WebsiteTraffic />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <OrdersReport subTitle={null} chartHeight={183} />
      </Grid>
      <Grid item xs={12}>
        <PopularProducts />
      </Grid>
      <Grid item xs={12} md={6}>
        <MarketingCampaign scrollHeight={428} />
      </Grid>
      <Grid item xs={12} md={6}>
        <LatestAlerts scrollHeight={385} />
      </Grid>
      <Grid item xs={12}>
        <SiteVisitors />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LastMonthSales />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <OnlineSignupsFilled />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <NewVisitorsThisMonth />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TotalRevenueThisYear />
      </Grid>
    </Grid>
  );
};

export default EcommerceDashboard;
