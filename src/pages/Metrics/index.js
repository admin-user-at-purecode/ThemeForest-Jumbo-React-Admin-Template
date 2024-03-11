import { Grid } from "@mui/material";
import LastMonthSales from "../../components/LastMonthSales/LastMonthSales";
import OnlineSignupsFilled from "../../components/OnlineSignupsFilled/OnlineSignupsFilled";
import NewVisitorsThisMonth from "../../components/NewVisitorsThisMonth/NewVisitorsThisMonth";
import TotalRevenueThisYear from "../../components/TotalRevenueThisYear/TotalRevenueThisYear";
import OrdersReport from "../../components/OrdersReport/OrdersReport";
import CreditScore from "../../components/CreditScore/CreditScore";
import TrafficAnalysis from "../../components/TrafficAnalysis/TrafficAnalysis";
import OnlineSignups from "../../components/OnlineSignups/OnlineSignups";
import RevenueThisYear from "../../components/RevenueThisYear/RevenueThisYear";
import EmailCampaign from "../../components/EmailCampaign/EmailCampaign";
import AvgDailyTraffic from "../../components/AvgDailyTraffic/AvgDailyTraffic";
import NewSubscribers from "../../components/NewSubscribers/NewSubscribers";
import NewAuthors from "../../components/NewAuthors/NewAuthors";
import NewArticles from "../../components/NewArticles/NewArticles";
import SalesReport from "../../components/SalesReport/SalesReport";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import PageViews from "../../components/PageViews/PageViews";
import Orders from "../../components/Orders/Orders";
import ObjectCountOrders from "../../components/ObjectCountCards/ObjectCountOrders";
import ObjectCountRevenue from "../../components/ObjectCountCards/ObjectCountRevenue";
import ObjectCountVisits from "../../components/ObjectCountCards/ObjectCountVisits";
import ObjectCountQueries from "../../components/ObjectCountCards/ObjectCountQueries";
import Stocks from "../../components/Stocks/Stocks";

const MetricsPage = () => {
  return (
    <Grid container spacing={3.75}>
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
      <Grid item xs={12} md={6} lg={4}>
        <OrdersReport />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CreditScore />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TrafficAnalysis />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ObjectCountOrders vertical={true} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ObjectCountRevenue vertical={true} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ObjectCountVisits vertical={true} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ObjectCountQueries vertical={true} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <OnlineSignups />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <RevenueThisYear />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <EmailCampaign />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <AvgDailyTraffic />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NewSubscribers />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NewAuthors />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NewArticles />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesReport />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ActiveUsers />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PageViews />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Orders />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Stocks />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ObjectCountOrders vertical={true} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ObjectCountRevenue vertical={true} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ObjectCountVisits vertical={true} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ObjectCountQueries vertical={true} />
      </Grid>
    </Grid>
  );
};

export default MetricsPage;
