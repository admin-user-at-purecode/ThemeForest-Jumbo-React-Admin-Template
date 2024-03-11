import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import OnlineSignupChart from "../OnlineSignups/OnlineSignupChart";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const RevenueThisYear = () => {
  return (
    <CardQuick
      title={
        <Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>
          $15,366
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"common.white"} mb={0}>
          {cardTitles.widgets.subheader.revenueThisYear}
        </Typography>
      }
      action={
        <Typography variant={"body1"}>
          6%{" "}
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
      <OnlineSignupChart />
    </CardQuick>
  );
};

export default RevenueThisYear;