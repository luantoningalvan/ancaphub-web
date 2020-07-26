import React from 'react';
import { useParams } from 'react-router-dom';

import PostList from './PostList';
import NewPost from './NewPost';

const Sections = () => {
  const { subpage } = useParams();

  const subpageMap = {
    undefined: <PostList />,
    new: <NewPost />,
  };

  return subpageMap[subpage];
};

export default Sections;
