import { Typography } from "@mui/material";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import CardIconText from "../CardIconText/CardIconText";
import { cardTitles } from "../../mock_data/cardTitles";

const ObjectCountQueries = ({ vertical }) => {
  return (
    <CardIconText
      icon={<ContactPhoneRoundedIcon fontSize="large" />}
      title={
        <Typography variant={"h4"} color={"warning.main"}>
          8,380
        </Typography>
      }
      subTitle={
        <Typography variant={"h6"} color={"text.secondary"}>
          {cardTitles.widgets.subheader.objectCountQueries}
        </Typography>
      }
      color={"warning.main"}
      disableHoverEffect={true}
      hideArrow={true}
      variant={"outlined"}
    />
  );
};

export default ObjectCountQueries;
