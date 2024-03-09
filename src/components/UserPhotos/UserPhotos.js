import React from "react";
import CardQuick from "../CardQuick/CardQuick";
import PictureItem from "./PictureItem";
import { userPhotos } from "../../mock_data/userPhotos";
import Scrollbar from "../Scrollbar/Scrollbar";
import ImageList from "@mui/material/ImageList";
import Div from "../Div/Div";
import { cardTitles } from "../../mock_data/cardTitles";

const UserPhotos = () => {
  return (
    <CardQuick title={cardTitles.widgets.title.pictures} wrapperSx={{ p: 0 }}>
      <Scrollbar autoHeight autoHideTimeout={200} autoHeightMin={358} autoHide>
        <Div sx={{ px: 3 }}>
          <ImageList
            cols={3}
            gap={16}
            sx={{ width: "100%", height: "auto", my: 0 }}
          >
            {userPhotos.map((item, index) => (
              <PictureItem item={item} key={index} />
            ))}
          </ImageList>
        </Div>
      </Scrollbar>
    </CardQuick>
  );
};

export default UserPhotos;
