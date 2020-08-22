import React from 'react';
import { useParams } from 'react-router-dom';

import About from './About';
import Donations from './Donations';
import FAQ from './FAQ';

const Sections = ({ project }) => {
  const { subpage } = useParams();

  const subpageMap = {
    about: <About project={project} />,
    donations: <Donations project={project} />,
    faq: <FAQ project={project} />,
  };

  return subpageMap[subpage];
};

export default Sections;
