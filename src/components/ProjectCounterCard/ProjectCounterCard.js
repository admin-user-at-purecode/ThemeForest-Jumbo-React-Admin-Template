import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import { Typography } from "@mui/material";
import Div from "../Div/Div";
import Image from "../../assets/images/46x46.png";

const ProjectCounterCard = () => {
  return (
    <CardQuick bgColor={"#6f42c1"}>
      <Div sx={{ display: "flex", alignItems: "center" }}>
        <img alt={"Properties Icon"} src={Image} />
        <Div sx={{ ml: 2, flex: 1 }}>
          <Typography color={"common.white"} variant={"h2"} mb={0.5}>
            09
          </Typography>
          <Typography color={"common.white"} variant={"h5"} mb={0}>
            Projects
          </Typography>
        </Div>
      </Div>
    </CardQuick>
  );
};

export default ProjectCounterCard;
