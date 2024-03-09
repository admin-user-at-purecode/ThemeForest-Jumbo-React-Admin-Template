import ChartOnlineVisitors from "./ChartOnlineVisitors";
import { Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import Div from "../Div/Div";
import { cardTitles } from "../../mock_data/cardTitles";

const OnlineVisitors = () => {
  return (
    <CardQuick
      title={
        <Typography variant={"h3"}>
          {cardTitles.widgets.title.onlineVisitors}
        </Typography>
      }
      subheader={
        <Typography variant={"h6"} color={"text.secondary"} mb={0}>
          {cardTitles.widgets.subheader.onlineVisitors}
        </Typography>
      }
      noWrapper
    >
      <Div sx={{ p: (theme) => theme.spacing(0, 3, 3) }}>
        <Typography variant={"h5"}>2,855 users online</Typography>
      </Div>
      <ChartOnlineVisitors />
    </CardQuick>
  );
};

export default OnlineVisitors;
