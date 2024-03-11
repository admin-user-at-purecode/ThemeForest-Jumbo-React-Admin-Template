import ActiveUsersChart from "./ActiveUsersChart";
import { Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const ActiveUsers = () => {
  return (
    <CardQuick
      title={<Typography variant={"h3"}>257</Typography>}
      subheader={cardTitles.widgets.subheader.activeUsers}
      action={
        <Typography variant={"body1"} color={"success.main"}>
          1.5%{" "}
          <TrendingUpIcon
            sx={{
              verticalAlign: "middle",
              fontSize: "1rem",
              ml: 0.5,
              color: "inherit",
            }}
          />
        </Typography>
      }
      wrapperSx={{ pt: 1 }}
    >
      <ActiveUsersChart />
    </CardQuick>
  );
};

export default ActiveUsers;
