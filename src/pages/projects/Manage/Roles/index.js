import React from 'react';
import { Breadcrumb } from '../../../../components/ui';
import { PageHeader } from '../styles';

const Roles = () => {
  return (
    <PageHeader>
      <div className="page-title">
        <Breadcrumb list={[{ title: 'Funções Administrativas' }]} />
        <h2>Funções Administrativas</h2>
      </div>
    </PageHeader>
  );
};

export default Roles;
