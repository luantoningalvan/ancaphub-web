import React from 'react';
import { useParams } from 'react-router-dom';

import About from './About';
import Donations from './Donations';
import FAQ from './FAQ';

const Sections = ({ project }: any) => {
  const { subpage }: { subpage: string } = useParams();

  const subpageMap: { [key: string]: React.ReactNode } = {
    about: <About project={project} />,
    donations: <Donations project={project} />,
    faq: <FAQ project={project} />,
  };

  return subpageMap[subpage];
};

export default Sections;
