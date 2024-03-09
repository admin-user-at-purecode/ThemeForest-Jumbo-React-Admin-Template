import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import LineChartSales from "./LineChartSales";
import ChartOrderRevenue from "./ChartOrderRevenue";
import renderSalesData from "./renderSalesData";
import { dataItems, menuItems } from "../../mock_data/salesStatistics";
import Content from "../Content/Content";
import Div from "../Div/Div";
import DdMenu from "../DdMenu/DdMenu";
import { useTheme } from "@mui/material/styles";
import { cardTitles } from "../../mock_data/cardTitles";

const SalesStatistics = () => {
  const theme = useTheme();
  return (
    <Card>
      <Content
        title={
          <Typography variant={"h5"} color={"common.white"}>
            {cardTitles.widgets.title.salesStatistics}
          </Typography>
        }
        action={<DdMenu menuItems={menuItems} />}
        bgColor={(theme) => theme.palette.primary.main}
        sx={{ color: "common.white" }}
      >
        {renderSalesData()}
      </Content>
      <Content>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Div
              sx={{
                p: (theme) => theme.spacing(3, 2, 3, 0),
              }}
            >
              <LineChartSales />
            </Div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Div
              sx={{
                p: (theme) => theme.spacing(3, 0, 3, 2),
                [theme.breakpoints.up("lg")]: {
                  borderLeft: (theme) => `solid 2px ${theme.palette.divider}`,
                },
                [theme.breakpoints.down("lg")]: {
                  borderTop: (theme) => `solid 2px ${theme.palette.divider}`,
                },
              }}
            >
              <ChartOrderRevenue data={dataItems} />
            </Div>
          </Grid>
        </Grid>
      </Content>
    </Card>
  );
};

export default SalesStatistics;
