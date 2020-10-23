import React from 'react';
import { useSelector } from 'react-redux';
import { FiXCircle } from 'react-icons/fi';
import { IconButton, Breadcrumbs } from 'snake-ui';
import { PageHeader } from '../styles';
import MiniUserCard from '../../../../components/users/MiniUserCard';

const Roles = () => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <>
      <PageHeader>
        <div className="page-title">
          <Breadcrumbs list={[{ title: 'Funções Administrativas' }]} />
          <h2>Funções Administrativas</h2>
        </div>
      </PageHeader>

      <h3 style={{ marginBottom: 8 }}>Administrador</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px',
        }}
      >
        <MiniUserCard user={user} />
      </div>

      <h3 style={{ marginBottom: 8, marginTop: 16 }}>Editores</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px',
        }}
      >
        <MiniUserCard user={user}>
          <IconButton icon={<FiXCircle />} />
        </MiniUserCard>
        <MiniUserCard user={user}>
          <IconButton icon={<FiXCircle />} />
        </MiniUserCard>
        <MiniUserCard user={user}>
          <IconButton icon={<FiXCircle />} />
        </MiniUserCard>
      </div>
    </>
  );
};

export default Roles;
