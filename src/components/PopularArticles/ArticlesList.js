import React from "react";
import ArticleItem from "./ArticleItem";
import List from "@mui/material/List";
import { popularArticles } from "../../mock_data/popularArticles";

const ArticlesList = () => {
  return (
    <List disablePadding>
      {popularArticles.map((item, index) => (
        <ArticleItem article={item} key={index} />
      ))}
    </List>
  );
};

export default ArticlesList;
