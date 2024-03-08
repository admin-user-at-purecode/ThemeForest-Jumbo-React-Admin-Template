import ProjectsList from "./ProjectsList";
import { Chip } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import Scrollbar from "../Scrollbar/Scrollbar";
import { cardTitles } from "../../mock_data/cardTitles";

const CurrentProjectsList = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.currentProjects}
      subheader={cardTitles.widgets.subheader.currentProjects}
      action={<Chip color={"warning"} label={"This week"} size={"small"} />}
      headerSx={{ borderBottom: 1, borderBottomColor: "divider" }}
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 356}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <ProjectsList />
      </Scrollbar>
    </CardQuick>
  );
};

export default CurrentProjectsList;
