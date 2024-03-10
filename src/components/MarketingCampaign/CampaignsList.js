import React from "react";
import { List } from "@mui/material";
import { marketingCampaigns } from "../../mock_data/marketingCampaignsData";
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
