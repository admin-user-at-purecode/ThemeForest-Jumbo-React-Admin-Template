import React from "react";
import { menuItems } from "../../mock_data/postsData";
import PostsList from "./PostsList";
import CardQuick from "../CardQuick/CardQuick";
import Scrollbar from "../Scrollbar/Scrollbar";
import DdMenu from "../DdMenu/DdMenu";
import { cardTitles } from "../../mock_data/cardTitles";

const LatestPosts = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.latestPosts}
      subheader={cardTitles.widgets.subheader.latestPosts}
      action={<DdMenu menuItems={menuItems} />}
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
        autoHeightMin={scrollHeight ? scrollHeight : 334}
      >
        <PostsList />
      </Scrollbar>
    </CardQuick>
  );
};

export default LatestPosts;
