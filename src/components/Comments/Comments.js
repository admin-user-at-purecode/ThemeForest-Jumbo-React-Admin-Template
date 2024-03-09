import CardQuick from "../CardQuick/CardQuick";
import CommentsList from "./CommentsList";
import { Chip } from "@mui/material";
import { cardTitles } from "../../mock_data/cardTitles";
import Scrollbar from "../Scrollbar/Scrollbar";

const Comments = ({ scrollHeight }) => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.comments}
      action={
        <Chip label={"8 New Comments"} color={"primary"} size={"small"} />
      }
      headerSx={{ borderBottom: 1, borderBottomColor: "divider" }}
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 460}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <CommentsList />
      </Scrollbar>
    </CardQuick>
  );
};

export default Comments;
