import AvgDailyTrafficChart from "./AvgDailyTrafficChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import Typography from "@mui/material/Typography";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const AvgDailyTraffic = () => {
  return (
    <CardQuick
      noWrapper
      title={
        <Typography variant={"h2"} color={"common.white"}>
          756+
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"common.white"} mb={0}>
          {cardTitles.widgets.subheader.avgDailyTraffic}
        </Typography>
      }
      action={<TimelineIcon />}
      sx={{ color: "common.white" }}
      bgColor={"#3D2C8D"}
    >
      <AvgDailyTrafficChart />
    </CardQuick>
  );
};

export default AvgDailyTraffic;
