import TrafficAnalysisChart from "./TrafficAnalysisChart";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";

const TrafficAnalysis = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.trafficAnalysis}
      subheader={cardTitles.widgets.subheader.trafficAnalysis}
      sx={{
        textAlign: "center",
      }}
    >
      <TrafficAnalysisChart />
    </CardQuick>
  );
};

export default TrafficAnalysis;
