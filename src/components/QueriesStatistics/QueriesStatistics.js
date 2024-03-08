import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import { Typography } from "@mui/material";
import Div from "../Div/Div";
import QueriesGraph from "./QueriesGraph";
import { cardTitles } from "../../mock_data/cardTitles";

const QueriesStatistics = () => {
  return (
    <CardQuick
      title={
        <Typography
          variant={"h6"}
          mb={0}
          sx={{ fontSize: 12, color: "common.white", letterSpacing: 1.5 }}
        >
          {cardTitles.widgets.title.onlineQueries}
        </Typography>
      }
      sx={{ color: "common.white" }}
      bgColor={"#42a5f5"}
      wrapperSx={{ p: 0, "&:last-child": { p: 0 } }}
    >
      <Div
        sx={{
          p: 3,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Typography variant={"h2"} color={"common.white"}>
          26,873
        </Typography>
        <Typography variant={"body1"} color={"common.white"} mb={0}>
          {"03% This Week"}
        </Typography>
      </Div>
      <QueriesGraph />
    </CardQuick>
  );
};

export default QueriesStatistics;
