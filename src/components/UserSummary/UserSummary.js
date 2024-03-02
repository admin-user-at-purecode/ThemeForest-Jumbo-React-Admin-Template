import { Avatar, Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import avatar7 from "../../assets/images/60x60.png";
import cardTitles from "../../mock_data/cardTitles";

const UserSummary = () => {
  return (
    <CardQuick
      noWrapper
      avatar={
        <Avatar
          sx={{
            width: 60,
            height: 60,
            boxShadow: 2,
            position: "relative",
          }}
          src={avatar7}
          alt={""}
        />
      }
      sx={{
        height: 116,
        "& .MuiCardHeader-root": {
          height: "100%",
        },
        "& .MuiCardHeader-avatar": {
          marginRight: "50px",
          marginLeft: "10px",

          "&::before": {
            content: '""',
            position: "absolute",
            top: "-35px",
            left: "-55px",
            width: 185,
            height: 185,
            backgroundColor: "#00C4B4",
            borderRadius: "50%",
          },
        },
      }}
      title={
        <Typography variant={"h4"} mb={0}>
          {cardTitles.widgets.title.userSummary}
        </Typography>
      }
      subheader={cardTitles.widgets.subheader.userSummary}
    ></CardQuick>
  );
};

export default UserSummary;
