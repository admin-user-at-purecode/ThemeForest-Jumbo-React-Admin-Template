import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import { Typography } from "@mui/material";
import Div from "../Div/Div";
import Image from "../../assets/images/46x46.png";

const TasksCounterCard = () => {
  return (
    <CardQuick bgColor={"#E44A77"}>
      <Div sx={{ display: "flex", alignItems: "center" }}>
        <img alt={"Task Icon"} src={Image} />
        <Div sx={{ ml: 2, flex: 1 }}>
          <Typography color={"common.white"} variant={"h2"} mb={0.5}>
            457
          </Typography>
          <Typography color={"common.white"} variant={"h5"} mb={0}>
            Tasks
          </Typography>
        </Div>
      </Div>
    </CardQuick>
  );
};

export default TasksCounterCard;
