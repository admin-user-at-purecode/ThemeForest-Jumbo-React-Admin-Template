import CardQuick from "../CardQuick/CardQuick";
import { Grid, ListItemText, Typography } from "@mui/material";
import RevenueGraph from "./RevenueGraph";
import { cardTitles } from "../../mock_data/cardTitles";

const RevenueHistory = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.revenueHistory}
      wrapperSx={{ pt: 1 }}
    >
      <Grid container spacing={3.75}>
        <Grid item xs={6}>
          <ListItemText
            primary={
              <Typography variant={"h3"} mb={0.5}>
                $216,759
              </Typography>
            }
            secondary={
              <Typography variant={"body1"} color={"text.secondary"}>
                YTD Revenue
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={6}>
          <RevenueGraph />
        </Grid>
      </Grid>
    </CardQuick>
  );
};
export default RevenueHistory;
