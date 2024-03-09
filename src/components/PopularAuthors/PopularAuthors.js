import AuthorsList from "./AuthorsList";
import Scrollbar from "../Scrollbar/Scrollbar";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const PopularAuthors = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.popularAuthors}
      subheader={cardTitles.widgets.subheader.popularAuthors}
      wrapperSx={{ p: 0 }}
      headerSx={{ borderBottom: 1, borderBottomColor: "divider" }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 366}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <AuthorsList />
      </Scrollbar>
    </CardQuick>
  );
};

export default PopularAuthors;
