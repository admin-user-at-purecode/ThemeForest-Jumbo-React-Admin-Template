import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import { Typography } from "@mui/material";
import Div from "../Div/Div";
import Image from "../../assets/images/46x46.png";

const FilesCounterCard = () => {
  return (
    <CardQuick bgColor={"#23BCBA"}>
      <Div sx={{ display: "flex", alignItems: "center" }}>
        <img alt={""} src={Image} />
        <Div sx={{ ml: 2, flex: 1 }}>
          <Typography color={"common.white"} variant={"h2"} mb={0.5}>
            42
          </Typography>
          <Typography color={"common.white"} variant={"h5"} mb={0}>
            Files
          </Typography>
        </Div>
      </Div>
    </CardQuick>
  );
};

export default FilesCounterCard;
