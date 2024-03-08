import CardQuick from "../CardQuick/CardQuick";
import { Typography } from "@mui/material";
import Div from "../Div/Div";
import Image from "../../assets/images/46x46.png";

const TeamsCounterCard = () => {
  return (
    <CardQuick bgColor={"#E73145"}>
      <Div sx={{ display: "flex", alignItems: "center" }}>
        <img alt={""} src={Image} />
        <Div sx={{ ml: 2, flex: 1 }}>
          <Typography color={"common.white"} variant={"h2"} mb={0.5}>
            13
          </Typography>
          <Typography color={"common.white"} variant={"h5"} mb={0}>
            Teams
          </Typography>
        </Div>
      </Div>
    </CardQuick>
  );
};

export default TeamsCounterCard;
