import OnlineSignupChart from "./OnlineSignupChart";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const OnlineSignups = () => {
  return (
    <CardQuick
      title={
        <Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>
          10,241
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"common.white"} mb={0}>
          {cardTitles.widgets.subheader.onlineSignups1}
        </Typography>
      }
      action={
        <Typography variant={"body1"}>
          1.5%{" "}
          <TrendingUpIcon
            sx={{ verticalAlign: "middle", fontSize: "1rem", ml: 0.5 }}
          />
        </Typography>
      }
      reverse
      sx={{ color: "common.white", borderTop: "4px solid #7352C7" }}
      bgColor={["#c1b2e6", "#7352c7"]}
      wrapperSx={{ pb: 0 }}
    >
      <OnlineSignupChart />
    </CardQuick>
  );
};

export default OnlineSignups;