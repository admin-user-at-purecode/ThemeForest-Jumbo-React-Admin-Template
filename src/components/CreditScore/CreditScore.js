import CreditScoreChart from "./CreditScoreChart";
import { Button, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import CardQuick from "../CardQuick/CardQuick";
import Div from "../Div/Div";
import { cardTitles } from "../../mock_data/cardTitles";
import { useState } from "react";

const CreditScore = () => {
  const [score, setScore] = useState(500);
  const [isLoading, setLoading] = useState(false);

  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const updateScore = () => {
    setLoading(!isLoading);
    simulateNetworkRequest().then(() => {
      setScore((Math.floor(Math.random() * 9) + 2) * 98);
      setLoading(!isLoading);
    });
  };

  return (
    <CardQuick
      title={cardTitles.widgets.title.creditScore}
      subheader={cardTitles.widgets.subheader.creditScore}
      sx={{
        textAlign: "center",
      }}
      wrapperSx={{ pt: 0 }}
    >
      <CreditScoreChart score={score} />
      <Div sx={{ my: 3 }}>
        <Typography variant={"body1"} mb={2.25}>
          New score available
        </Typography>
        <Button
          variant={"contained"}
          size={"small"}
          onClick={updateScore}
          startIcon={<RefreshIcon />}
        >
          Refresh
        </Button>
      </Div>
    </CardQuick>
  );
};

export default CreditScore;
