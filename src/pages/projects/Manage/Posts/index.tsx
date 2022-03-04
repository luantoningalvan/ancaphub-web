import React from "react";
import { useParams } from "react-router-dom";

import PostList from "./PostList";
import NewPost from "./PostForm";
import PostForm from "./PostForm";

const Sections: React.ReactNode = ({ project }: any) => {
  const { subpage } = useParams<{ subpage: string }>();

  const subpageMap: { [key: string]: React.ReactNode } = {
    undefined: <PostList project={project} />,
    new: <PostForm project={project} />,
    edit: <PostForm project={project} editing={true} />,
  };

  return subpageMap[subpage as string];
};

export default Sections;
