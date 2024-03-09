import React from "react";
import Product from "./Product";
import { CardActions, List } from "@mui/material";
import Button from "@mui/material/Button";
import CardQuick from "../CardQuick/CardQuick";
import DdMenu from "../DdMenu/DdMenu";
import { cardTitles } from "../../mock_data/cardTitles";
import { productsData, menuItems } from "../../mock_data/popularProductsData";

const PopularProducts = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.popularProducts}
      subheader={cardTitles.widgets.subheader.popularProducts}
      action={<DdMenu menuItems={menuItems} />}
      noWrapper
    >
      <List
        disablePadding
        sx={{
          display: "flex",
          minWidth: 0,
          flexWrap: "wrap",
        }}
      >
        {productsData.map((item, key) => (
          <Product key={key} product={item} />
        ))}
      </List>
      <CardActions sx={{ pt: 0 }}>
        <Button variant={"text"}>View all</Button>
      </CardActions>
    </CardQuick>
  );
};

export default PopularProducts;
