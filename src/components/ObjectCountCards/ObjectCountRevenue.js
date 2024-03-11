import { Typography } from "@mui/material";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import CardIconText from "../CardIconText/CardIconText";
import { cardTitles } from "../../mock_data/cardTitles";

const ObjectCountRevenue = ({ vertical }) => {
  return (
    <CardIconText
      icon={<AccountBalanceWalletRoundedIcon fontSize="large" />}
      title={
        <Typography variant={"h4"} color={"secondary.main"}>
          29,380
        </Typography>
      }
      subTitle={
        <Typography variant={"h6"} color={"text.secondary"}>
          {cardTitles.widgets.subheader.objectCountRevenues}
        </Typography>
      }
      color={"secondary.main"}
      disableHoverEffect={true}
      hideArrow={true}
      variant={"outlined"}
    />
  );
};

export default ObjectCountRevenue;
