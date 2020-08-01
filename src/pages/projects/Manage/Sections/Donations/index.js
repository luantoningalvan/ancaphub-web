import React from 'react';
import { Breadcrumb } from '../../../../../components/ui';
import { PageHeader } from '../../styles';

const Donations = () => {
  return (
    <PageHeader>
      <div className="page-title">
        <Breadcrumb list={[{ title: 'Seções' }, { title: 'Doações' }]} />
        <h2>Doações</h2>
      </div>
    </PageHeader>
  );
};

export default Donations;
