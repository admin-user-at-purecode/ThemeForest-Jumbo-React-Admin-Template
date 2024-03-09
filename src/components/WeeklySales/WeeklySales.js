import React, { useReducer, useState } from "react";
import ProductSalesList from "./ProductSalesList";
import { productsList } from "../../mock_data/productsList";
import ProductSelectionControl from "./ProductSelectionControl";
import { reducer } from "./reducer";
import ChartReport from "./components/ChartReport";
import { IconButton, Tooltip, Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import Scrollbar from "../Scrollbar/Scrollbar";
import Div from "../Div/Div";
import Image from "../../assets/images/40x40.png";
import { cardTitles } from "../../mock_data/cardTitles";

const init = (products) => {
  return [products[0], products[1], products[2], products[3], products[4]];
};
const WeeklySales = () => {
  const [selectedProducts, dispatch] = useReducer(reducer, productsList, init);
  const [showChart, setShowChart] = useState(false);

  const onSelectionChanged = (checked, value) => {
    const item = productsList.find((item) => item.id.toString() === value);
    dispatch({
      type: checked ? "ADD_PRODUCT" : "REMOVE_PRODUCT",
      payload: item,
    });
  };

  return (
    <CardQuick
      title={cardTitles.widgets.title.weeklySales}
      subheader={cardTitles.widgets.subheader.weeklySales}
      action={
        <Tooltip
          title={
            selectedProducts.length > 0 ? "Chart view" : "No data available"
          }
          arrow
          placement={"top"}
          sx={{
            "& .MuiTooltip-arrow": {
              marginTop: "-0.65em",
            },
          }}
        >
          <IconButton onClick={() => setShowChart(!showChart)}>
            <InsertChartOutlinedIcon />
          </IconButton>
        </Tooltip>
      }
      wrapperSx={{ p: 0 }}
    >
      {showChart ? (
        <Scrollbar
          autoHeight={true}
          autoHideTimeout={4000}
          autoHeightMin={334}
          autoHide={true}
          hideTracksWhenNotNeeded
        >
          <ChartReport data={selectedProducts} />
        </Scrollbar>
      ) : (
        <>
          <ProductSelectionControl
            items={productsList}
            selectedItems={selectedProducts}
            onSelectedChanged={onSelectionChanged}
          />
          {selectedProducts.length > 0 ? (
            <ProductSalesList products={selectedProducts} />
          ) : (
            <Div
              sx={{
                p: 3,
              }}
            >
              <img alt={"Chart"} src={Image} width={150} />
              <Typography variant={"h5"} color={"text.secondary"}>
                No products added to report
              </Typography>
            </Div>
          )}
        </>
      )}
    </CardQuick>
  );
};

export default WeeklySales;
