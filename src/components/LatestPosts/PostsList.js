import React from "react";
import { latestPosts } from "../../mock_data/postsData";
import { List } from "@mui/material";
import PostItem from "./PostItem";

const PostsList = () => {
  return (
    <List disablePadding>
      {latestPosts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </List>
  );
};

export default PostsList;
