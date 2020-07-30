import React from 'react';
import { useParams } from 'react-router-dom';

import PostList from './PostList';
import NewPost from './NewPost';

const Sections = ({ project }) => {
  const { subpage } = useParams();

  const subpageMap = {
    undefined: <PostList project={project} />,
    new: <NewPost project={project} />,
  };

  return subpageMap[subpage];
};

export default Sections;
