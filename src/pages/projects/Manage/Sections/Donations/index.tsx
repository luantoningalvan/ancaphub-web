import React from 'react';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import { TextField, Select } from '../../../../../components/ui';
import { Card, CardHeader, CardBody, Button, Breadcrumbs } from 'snake-ui';
import { PageHeader } from '../../styles';
import DonationCard from '../../../../../components/projects/ProjectDonationCard';
import {
  removeProjectDonationRequest,
  addProjectDonationRequest,
} from '../../../../../actions/projects';

const Donations: React.FC<{ project: any }> = ({ project }) => {
  const dispatch = useDispatch();

  const handleDelete = (donationId: string) => {
    dispatch(
      removeProjectDonationRequest({ projectId: project._id, donationId })
    );
  };

  const handleSubmit: SubmitHandler = (data, { reset }) => {
    dispatch(addProjectDonationRequest({ data, id: project._id }));
    reset();
  };

  return (
    <>
      <PageHeader>
        <div className="page-title">
          <Breadcrumbs list={[{ title: 'Seções' }, { title: 'Doações' }]} />
          <h2>Doações</h2>
        </div>
      </PageHeader>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px',
        }}
      >
        {project.donation_methods.map((donation: any) => (
          <DonationCard
            donation={donation}
            key={donation._id}
            showDeleteButton
            onDelete={() => handleDelete(donation._id)}
          />
        ))}
      </div>

      <Card style={{ marginTop: 16, padding: 8 }}>
        <CardHeader title="Adicionar novo método" />
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Select
              name="type"
              placeholder="Tipo"
              options={[
                { label: 'Banco', value: 'teste' },
                { label: 'Criptomoeda', value: 'teste' },
                { label: 'Paypal', value: 'teste' },
                { label: 'Outro', value: 'teste' },
              ]}
            />
            <TextField name="title" placeholder="Título" />
            <TextField name="description" placeholder="Descrição" multiline />

            <Button
              type="submit"
              color="secondary"
              fullWidth
              style={{ marginTop: 16 }}
            >
              Adicionar
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default Donations;
