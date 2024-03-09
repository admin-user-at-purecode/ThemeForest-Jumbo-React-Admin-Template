import React from "react";
import ActivitiesList from "./ActivitiesList";
import { Chip } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import Scrollbar from "../Scrollbar/Scrollbar";
import { cardTitles } from "../../mock_data/cardTitles";

const RecentActivities = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.recentActivities}
      action={<Chip color={"warning"} size={"small"} label={"Last 20 days"} />}
      wrapperSx={{ px: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 278}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <ActivitiesList />
      </Scrollbar>
    </CardQuick>
  );
};

export default RecentActivities;
