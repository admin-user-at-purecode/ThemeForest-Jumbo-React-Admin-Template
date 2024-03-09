import ArticlesList from "./ArticlesList";
import CardQuick from "../CardQuick/CardQuick";
import DdMenu from "../DdMenu/DdMenu";
import { menuItems } from "./data";
import Scrollbar from "../Scrollbar/Scrollbar";
import { cardTitles } from "../../mock_data/cardTitles";

const PopularArticles = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.popularArticles}
      action={<DdMenu menuItems={menuItems} />}
      headerSx={{
        pb: 1,

        "& .MuiCardHeader-action": {
          my: -0.75,
        },
      }}
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 395}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <ArticlesList />
      </Scrollbar>
    </CardQuick>
  );
};

export default PopularArticles;
