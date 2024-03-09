import Typography from "@mui/material/Typography";
import CardQuick from "../CardQuick/CardQuick";
import TimelineIcon from "@mui/icons-material/Timeline";
import OnlineSignupChart from "../OnlineSignups/OnlineSignupChart";
import { cardTitles } from "../../mock_data/cardTitles";

const LastMonthSales = () => {
  return (
    <CardQuick
      title={
        <Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>
          756+
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"common.white"} mb={0}>
          {cardTitles.widgets.subheader.latestMonthSales}
        </Typography>
      }
      action={<TimelineIcon />}
      reverse
      sx={{ color: "common.white", borderTop: "4px solid #7352C7" }}
      bgColor={["#c1b2e6", "#7352c7"]}
      wrapperSx={{ pb: 0 }}
    >
      <OnlineSignupChart />
    </CardQuick>
  );
};

export default LastMonthSales;
