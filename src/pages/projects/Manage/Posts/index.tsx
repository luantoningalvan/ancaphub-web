import React from 'react';
import { useParams } from 'react-router-dom';

import PostList from './PostList';
import NewPost from './NewPost';
import EditPost from './EditPost';

const Sections: React.ReactNode = ({ project }: any) => {
  const { subpage }: { subpage: string } = useParams();

  const subpageMap: { [key: string]: React.ReactNode } = {
    undefined: <PostList project={project} />,
    new: <NewPost project={project} />,
    edit: <EditPost project={project} />,
  };

  return subpageMap[subpage];
};

export default Sections;
