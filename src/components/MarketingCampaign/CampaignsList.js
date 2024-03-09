import React from "react";
import { List } from "@mui/material";
import { marketingCampaigns } from "../../mock_data/marketingCampaignData";
import CampaignItem from "./CampaignItem";

const CampaignsList = () => {
  return (
    <List disablePadding>
      {marketingCampaigns.map((item, index) => (
        <CampaignItem item={item} key={index} />
      ))}
    </List>
  );
};

export default CampaignsList;
