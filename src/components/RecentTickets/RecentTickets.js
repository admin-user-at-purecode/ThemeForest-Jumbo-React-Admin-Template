import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import RecentTicketsList from "./RecentTicketsList";
import Scrollbar from "../Scrollbar/Scrollbar";
import { cardTitles } from "../../mock_data/cardTitles";

const RecentTickets = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.recentTicket}
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={284}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <RecentTicketsList />
      </Scrollbar>
    </CardQuick>
  );
};

export default RecentTickets;
