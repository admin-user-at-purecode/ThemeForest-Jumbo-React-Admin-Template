import NewAuthorsChart from "./NewAuthorsChart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Grid, Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import Div from "../Div/Div";
import { cardTitles } from "../../mock_data/cardTitles";

const NewAuthors = () => {
  return (
    <CardQuick
      title={<SupervisorAccountIcon sx={{ color: "common.white" }} />}
      bgColor={"#20c997"}
      sx={{ color: "common.white" }}
      wrapperSx={{ pt: 0 }}
    >
      <Grid container columnSpacing={2} alignItems={"flex-end"}>
        <Grid item xs={5}>
          <Typography variant={"h2"} color={"common.white"}>
            232
          </Typography>
          <Typography
            variant={"h6"}
            color={"common.white"}
            mb={0}
            sx={{ whiteSpace: "nowrap" }}
          >
            {cardTitles.widgets.subheader.newAuthors}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Div sx={{ mt: -1.25 }}>
            <NewAuthorsChart />
          </Div>
        </Grid>
      </Grid>
    </CardQuick>
  );
};

export default NewAuthors;
