import ChartYearlyProfit from "./ChartYearlyProfit";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const YearlyProfileReport = () => {
  return (
    <CardQuick
      title={
        <Typography variant={"h4"} mb={0}>
          {cardTitles.widgets.title.yearlyProfileReports}
        </Typography>
      }
      wrapperSx={{ pt: 0 }}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={8}>
          <ChartYearlyProfit />
        </Grid>
        <Grid item xs={4} alignSelf={"center"}>
          <Typography variant={"h2"}>$685k+</Typography>
          <Typography
            variant={"body1"}
            color={"text.secondary"}
            sx={{ whiteSpace: "nowrap" }}
          >
            Past 9 months
          </Typography>
        </Grid>
      </Grid>
    </CardQuick>
  );
};

export default YearlyProfileReport;
