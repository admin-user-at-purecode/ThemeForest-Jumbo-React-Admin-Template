import OrdersReportChart from "./OrdersReportChart";
import { Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const OrdersReport = ({ chartHeight, subTitle }) => {
  return (
    <CardQuick
      title={
        <Typography variant={"h4"} mb={0}>
          {cardTitles.widgets.title.orderReports}
        </Typography>
      }
      subheader={
        subTitle === null ? subTitle : cardTitles.widgets.subheader.orderReports
      }
      sx={{ textAlign: "center" }}
      wrapperSx={{ pt: 0 }}
    >
      <OrdersReportChart height={chartHeight} />
    </CardQuick>
  );
};

export default OrdersReport;
