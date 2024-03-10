import { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import NewRequestsList from "./NewRequestsList";
import IconButton from "@mui/material/IconButton";
import { requests } from "../../mock_data/requests";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const NewRequests = () => {
  const [refreshRequests, setRefreshRequests] = useState(false);

  return (
    <CardQuick
      title={cardTitles.widgets.title.newRequests}
      subheader={cardTitles.widgets.subheader.newRequests}
      action={
        <IconButton onClick={() => setRefreshRequests(true)}>
          <AutorenewIcon />
        </IconButton>
      }
      wrapperSx={{ p: 0 }}
    >
      <NewRequestsList
        refresh={refreshRequests}
        requests={requests}
        onRefreshCallback={setRefreshRequests}
      />
    </CardQuick>
  );
};

export default NewRequests;
