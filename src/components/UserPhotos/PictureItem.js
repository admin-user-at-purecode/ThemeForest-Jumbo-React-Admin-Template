import React from "react";
import { ImageListItemBar } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

const PictureItem = ({ item }) => {
  return (
    <ImageListItem
      key={item.img}
      sx={{
        borderRadius: 2,
        overflow: "hidden",

        "& .MuiImageListItemBar-root": {
          transition: "all 0.3s ease",
          transform: "translateY(100%)",
        },

        "&:hover .MuiImageListItemBar-root": {
          transform: "translateY(0)",
        },
      }}
    >
      <img
        src={item.photo_url}
        srcSet={item.photo_url}
        alt={item.caption}
        loading="lazy"
      />
      <ImageListItemBar title={item.caption} subtitle={item.size} />
    </ImageListItem>
  );
};

export default PictureItem;
