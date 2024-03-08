import React from "react";
import { Grid } from "@mui/material";
import CurrencyCalculator from "../../components/CurrencyCalculator";
import WelcomeSummary from "../../components/WelcomSummary";
import RevenueHistory from "../../components/RevenueHistory";
import NewCustomers from "../../components/NewCustomers/NewCustomers";
import Growth from "../../components/Growth";
import ProjectCounterCard from "../../components/ProjectCounterCard";
import TasksCounterCard from "../../components/TasksCounterCard";
import TeamsCounterCard from "../../components/TeamsCounterCard";
import FilesCounterCard from "../../components/FilesCounterCard";
import TasksList2 from "../../components/TasksList2/TasksList2";
import RecentTickets from "../../components/RecentTickets/RecentTickets";
import TicketsStatus from "../../components/TicketsStatus/TicketsStatus";
import RevenueOverview from "../../components/RevenueOverview/RevenueOverview";
import RecentActivities1 from "../../components/RecentActivities1/RecentActivities1";
import CurrentProjectList from "../../components/CurrentProjectsList/CurrentProjectList";

const CrmDashboard = () => {
  return (
    <Grid container spacing={3.5}>
      <Grid item xs={12}>
        <WelcomeSummary />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <RevenueHistory />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <NewCustomers />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Growth />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ProjectCounterCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TasksCounterCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TeamsCounterCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <FilesCounterCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <TasksList2 scrollHeight={373} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrentProjectList />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <RecentTickets />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <TicketsStatus />
      </Grid>
      <Grid item xs={12}>
        <RevenueOverview />
      </Grid>
      <Grid item xs={12} md={6}>
        <RecentActivities1 scrollHeight={306} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrencyCalculator />
      </Grid>
    </Grid>
  );
};

export default CrmDashboard;
