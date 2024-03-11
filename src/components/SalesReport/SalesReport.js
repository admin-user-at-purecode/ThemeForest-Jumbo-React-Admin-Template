import SalesReportChart from "./SalesReportChart";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import Div from "../Div/Div";
import { cardTitles } from "../../mock_data/cardTitles";

const SalesReport = () => {
  return (
    <CardQuick
      title={
        <Typography variant={"h4"} mb={0}>
          {cardTitles.widgets.title.salesReports}
        </Typography>
      }
      wrapperSx={{ pt: 0 }}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={5} alignSelf={"center"}>
          <Typography variant={"h2"}>$685k+</Typography>
          <Typography
            variant={"body1"}
            color={"text.secondary"}
            sx={{ whiteSpace: "nowrap" }}
            mb={0}
          >
            Past 9 months
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Div sx={{ my: "-2px" }}>
            <SalesReportChart />
          </Div>
        </Grid>
      </Grid>
    </CardQuick>
  );
};

export default SalesReport;
