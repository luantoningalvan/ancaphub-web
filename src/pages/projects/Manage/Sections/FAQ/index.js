import React from 'react';
import { Breadcrumb } from '../../../../../components/ui';
import { PageHeader } from '../../styles';

const FAQ = () => {
  return (
    <PageHeader>
      <div className="page-title">
        <Breadcrumb list={[{ title: 'Seções' }, { title: 'FAQ' }]} />
        <h2>FAQ</h2>
      </div>
    </PageHeader>
  );
};

export default FAQ;
