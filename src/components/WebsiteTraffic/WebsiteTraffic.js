import ChartWebsiteTraffic from "./ChartWebsiteTraffic";
import { Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const WebsiteTraffic = () => {
  return (
    <CardQuick
      title={
        <Typography variant={"h4"} mb={0}>
          {cardTitles.widgets.title.websiteTraffics}
        </Typography>
      }
      noWrapper
      sx={{ textAlign: "center" }}
    >
      <ChartWebsiteTraffic onlineUsers={130} />
    </CardQuick>
  );
};

export default WebsiteTraffic;
