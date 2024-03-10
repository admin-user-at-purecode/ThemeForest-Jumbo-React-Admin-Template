import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CardIconText from "../CardIconText/CardIconText";
import { cardTitles } from "../../mock_data/cardTitles";

const Ideas = () => {
  return (
    <CardIconText
      icon={<LightbulbOutlinedIcon fontSize={"large"} />}
      title={"2,371"}
      subTitle={cardTitles.widgets.subheader.ideas}
    />
  );
};

export default Ideas;
