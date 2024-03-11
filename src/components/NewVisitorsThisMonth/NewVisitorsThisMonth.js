import Typography from "@mui/material/Typography";
import CardQuick from "../CardQuick/CardQuick";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmailCampaignChart from "../EmailCampaign/EmailCampaignChart";
import { cardTitles } from "../../mock_data/cardTitles";

const NewVisitorsThisMonth = () => {
  return (
    <CardQuick
      title={
        <Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>
          24,569
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"common.white"} mb={0}>
          {cardTitles.widgets.subheader.newVisitors}
        </Typography>
      }
      action={<TrendingUpIcon fontSize={"small"} />}
      reverse
      sx={{ color: "common.white", borderTop: "4px solid #F39711" }}
      bgColor={["#f9cc8a", "#f39711"]}
      wrapperSx={{ pb: 0 }}
    >
      <EmailCampaignChart />
    </CardQuick>
  );
};

export default NewVisitorsThisMonth;
