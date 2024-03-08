import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import Div from "../Div/Div";
import Customer from "./Customer";
import { cardTitles } from "../../mock_data/cardTitles";

const NewCustomers = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.newCustomer}
      wrapperSx={{ pt: 2 }}
    >
      <Div sx={{ display: "flex", pb: "2px" }}>
        <Customer />
      </Div>
    </CardQuick>
  );
};

export default NewCustomers;
