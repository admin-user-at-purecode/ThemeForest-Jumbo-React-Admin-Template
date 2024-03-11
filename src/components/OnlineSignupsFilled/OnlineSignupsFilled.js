import Typography from "@mui/material/Typography";
import CardQuick from "../CardQuick/CardQuick";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RevenueChart from "../RevenueThisYear/RevenueChart";
import { cardTitles } from "../../mock_data/cardTitles";

const OnlineSignupsFilled = () => {
  return (
    <CardQuick
      title={
        <Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>
          10,241
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"common.white"} mb={0}>
          {cardTitles.widgets.subheader.onlineSignups}
        </Typography>
      }
      action={
        <Typography variant={"body1"}>
          1.5%
          <TrendingUpIcon
            sx={{ verticalAlign: "middle", fontSize: "1rem", ml: 0.5 }}
          />
        </Typography>
      }
      reverse
      sx={{ color: "common.white", borderTop: "4px solid #3BD2A2" }}
      bgColor={["#a3ead3", "#3bd2a2"]}
      wrapperSx={{ pb: 0 }}
    >
      <RevenueChart />
    </CardQuick>
  );
};

export default OnlineSignupsFilled;
