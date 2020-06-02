import React from "react";
import PostCard from "./PostCard";
import { LoadContent, Paper } from "../ui";
import { isEmpty } from "lodash";

export default ({ posts, loading }) => (
  <LoadContent loading={loading}>
    {!isEmpty(posts) ? (
      <>
        {Object.values(posts).map((item) => (
          <PostCard data={item} key={item._id} />
        ))}
      </>
    ) : (
      <Paper padding>Nenhuma publicação disponível</Paper>
    )}
  </LoadContent>
);
