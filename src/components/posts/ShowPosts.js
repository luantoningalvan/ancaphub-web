import React from 'react';
import { isEmpty } from 'lodash';
import PostCard from './PostCard';
import { LoadContent, Paper } from '../ui';

const ShowPosts = ({ posts, loading }) => (
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

export default ShowPosts;
