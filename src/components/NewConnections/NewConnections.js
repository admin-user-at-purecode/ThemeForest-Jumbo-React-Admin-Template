import ConnectionsList from "./ConnectionsList";
import Button from "@mui/material/Button";
import CardQuick from "../CardQuick/CardQuick";
import Scrollbar from "../Scrollbar/Scrollbar";
import cardTitles from "../../mock_data/cardTitles";

const NewConnections = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.newConnection}
      subheader={cardTitles.widgets.subheader.newConnection}
      action={
        <Button variant={"contained"} size={"small"}>
          See all
        </Button>
      }
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 278}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <ConnectionsList />
      </Scrollbar>
    </CardQuick>
  );
};

export default NewConnections;
