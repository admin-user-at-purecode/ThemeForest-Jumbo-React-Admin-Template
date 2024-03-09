import NewArticlesChart from "./NewArticlesChart";
import { Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const NewArticles = ({ headerSx }) => {
  return (
    <CardQuick
      noWrapper
      title={<Typography variant={"h2"}>526+</Typography>}
      subheader={
        <Typography variant={"h6"} color={"text.secondary"}>
          {cardTitles.widgets.subheader.newArticles}
        </Typography>
      }
      action={<BookmarkIcon />}
      headerSx={headerSx}
    >
      <NewArticlesChart />
    </CardQuick>
  );
};

export default NewArticles;
