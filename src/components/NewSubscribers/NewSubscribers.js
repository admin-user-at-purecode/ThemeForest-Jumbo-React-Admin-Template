import NewSubscribersChart from "./NewSubscribersChart";
import StarIcon from "@mui/icons-material/Star";
import { Grid, Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const NewSubscribers = () => {
  return (
    <CardQuick
      title={<StarIcon sx={{ color: "common.white" }} />}
      bgColor={"#E44A77"}
      sx={{ color: "common.white" }}
      wrapperSx={{ pt: 0.5 }}
    >
      <Grid container columnSpacing={2} alignItems={"flex-end"}>
        <Grid item xs={6}>
          <Typography variant={"h2"} color={"common.white"}>
            85k+
          </Typography>
          <Typography variant={"h6"} color={"common.white"} mb={0}>
            {cardTitles.widgets.subheader.newSubscribers}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <NewSubscribersChart />
        </Grid>
      </Grid>
    </CardQuick>
  );
};

export default NewSubscribers;
