import { Typography } from "@mui/material";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import CardIconText from "../CardIconText/CardIconText";
import { cardTitles } from "../../mock_data/cardTitles";

const ObjectCountVisits = ({ vertical }) => {
  return (
    <CardIconText
      icon={<TouchAppRoundedIcon fontSize="large" />}
      title={
        <Typography variant={"h4"} color={"success.main"}>
          2,870
        </Typography>
      }
      subTitle={
        <Typography variant={"h6"} color={"text.secondary"}>
          {cardTitles.widgets.subheader.objectCountVisits}
        </Typography>
      }
      color={"success.main"}
      disableHoverEffect={true}
      hideArrow={true}
      variant={"outlined"}
    />
  );
};

export default ObjectCountVisits;
