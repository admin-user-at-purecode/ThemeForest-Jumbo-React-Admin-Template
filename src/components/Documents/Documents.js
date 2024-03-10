import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CardIconText from "../CardIconText/CardIconText";
import { cardTitles } from "../../mock_data/cardTitles";

const Documents = () => {
  return (
    <CardIconText
      icon={<FolderOutlinedIcon fontSize="large" />}
      title={"3,825"}
      subTitle={cardTitles.widgets.subheader.documents}
      color={"secondary.main"}
    />
  );
};

export default Documents;
