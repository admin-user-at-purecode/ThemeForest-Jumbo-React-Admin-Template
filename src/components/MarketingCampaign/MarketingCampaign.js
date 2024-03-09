import CampaignsList from "./CampaignsList";
import { menuItems } from "./data";
import { Chip } from "@mui/material";
import Scrollbar from "../Scrollbar/Scrollbar";
import DdMenu from "../DdMenu/DdMenu";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const MarketingCampaign = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.marketingCampaign}
      subheader={cardTitles.widgets.subheader.marketingCampaign}
      action={
        <>
          <Chip label={"Today"} size={"small"} sx={{ mr: 1 }} />
          <DdMenu menuItems={menuItems} />
        </>
      }
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
        autoHeightMin={scrollHeight ? scrollHeight : 356}
      >
        <CampaignsList />
      </Scrollbar>
    </CardQuick>
  );
};

export default MarketingCampaign;
