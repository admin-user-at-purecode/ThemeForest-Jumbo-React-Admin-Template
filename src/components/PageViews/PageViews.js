import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Stack from "@mui/material/Stack";
import { TrendingDown } from "@mui/icons-material";
import CardQuick from "../CardQuick/CardQuick";
import Span from "../Span/Span";
import { cardTitles } from "../../mock_data/cardTitles";

const PageViews = () => {
  return (
    <CardQuick
      title={
        <Typography variant={"h5"} mb={0}>
          {cardTitles.widgets.title.pageViews}
        </Typography>
      }
      action={
        <Stack direction={"row"} spacing={1}>
          <Chip label={"Monthly"} color={"success"} size={"small"} />
          <ShowChartIcon fontSize={"small"} />
        </Stack>
      }
      wrapperSx={{ textAlign: "center" }}
      headerSx={{
        borderBottom: 1,
        borderBottomColor: "divider",
      }}
    >
      <Typography variant={"h2"}>386,290</Typography>
      <Typography variant={"body1"}>
        Avg. daily views:
        <Span sx={{ color: "error.main", ml: 1 }}>
          7,829
          <TrendingDown
            fontSize={"small"}
            sx={{ verticalAlign: "middle", ml: 1 }}
          />
        </Span>
      </Typography>
    </CardQuick>
  );
};

export default PageViews;
