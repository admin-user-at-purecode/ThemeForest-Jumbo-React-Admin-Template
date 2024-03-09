import React, { useState } from "react";
import ProductAvatars from "./ProductAvatars";
import CheckboxList from "./CheckboxList";
import { Button, Popover } from "@mui/material";
import Div from "../Div/Div";

const ProductSelectionControl = ({
  items,
  selectedItems,
  onSelectedChanged,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <Div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: (theme) => theme.spacing(1, 3),
      }}
    >
      {selectedItems.length > 0 && <ProductAvatars items={selectedItems} />}
      <Button
        variant={"contained"}
        color={"inherit"}
        disableElevation
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        +ADD
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <CheckboxList
          items={items}
          selectedItems={selectedItems}
          onCheckboxChange={onSelectedChanged}
        />
      </Popover>
    </Div>
  );
};

export default ProductSelectionControl;
