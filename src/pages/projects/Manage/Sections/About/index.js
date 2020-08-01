import React from 'react';
import { Breadcrumb } from '../../../../../components/ui';
import { PageHeader } from '../../styles';

const About = () => {
  return (
    <PageHeader>
      <div className="page-title">
        <Breadcrumb list={[{ title: 'Seções' }, { title: 'Sobre' }]} />
        <h2>Sobre</h2>
      </div>
    </PageHeader>
  );
};

export default About;
