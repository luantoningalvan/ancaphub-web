import React from 'react';
import { useParams } from 'react-router-dom';

import About from './About';
import Donations from './Donations';
import FAQ from './FAQ';

const Sections = () => {
  const { subpage } = useParams();

  const subpageMap = {
    about: <About />,
    donations: <Donations />,
    faq: <FAQ />,
  };

  return subpageMap[subpage];
};

export default Sections;
