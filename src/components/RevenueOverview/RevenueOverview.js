import CardQuick from "../CardQuick/CardQuick";
import { Grid } from "@mui/material";
import RevenueInfo from "./RevenueInfo";
import RevenueProgress from "./RevenueProgress";
import VisitorsOnMap from "../SiteVisitors/VisitorsOnMap";
import { cardTitles } from "../../mock_data/cardTitles";

const RevenueOverview = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.revenueOverview}
      wrapperSx={{ pt: 0 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <RevenueProgress />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          sx={{
            order: { lg: 3 },
            mb: { lg: -3 },
            mt: { sm: -7 },
          }}
        >
          <RevenueInfo />
        </Grid>
        <Grid item xs={12} lg={6}>
          <VisitorsOnMap />
        </Grid>
      </Grid>
    </CardQuick>
  );
};

export default RevenueOverview;
