import { Typography } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CardIconText from "../CardIconText/CardIconText";
import { cardTitles } from "../../mock_data/cardTitles";

const ObjectCountOrders = ({ vertical }) => {
  return (
    <CardIconText
      icon={<ShoppingCartRoundedIcon fontSize="large" />}
      title={
        <Typography variant={"h4"} color={"primary.main"}>
          2,380
        </Typography>
      }
      subTitle={
        <Typography variant={"h6"} color={"text.secondary"}>
          {cardTitles.widgets.subheader.objectCountOrders}
        </Typography>
      }
      color={"primary.main"}
      disableHoverEffect={true}
      hideArrow={true}
      variant={"outlined"}
    />
  );
};

export default ObjectCountOrders;
