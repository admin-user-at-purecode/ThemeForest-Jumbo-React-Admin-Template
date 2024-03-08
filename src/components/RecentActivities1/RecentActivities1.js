import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import RecentActivitiesList from "./RecentActivitiesList";
import Scrollbar from "../Scrollbar/Scrollbar";
import { cardTitles } from "../../mock_data/cardTitles";

const RecentActivities1 = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.recentActivities}
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 480}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <RecentActivitiesList />
      </Scrollbar>
    </CardQuick>
  );
};

export default RecentActivities1;
