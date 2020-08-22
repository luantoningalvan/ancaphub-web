import React from 'react';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import {
  Breadcrumb,
  TextField,
  Select,
  Card,
  CardHeader,
  CardBody,
  Button,
} from '../../../../../components/ui';
import { PageHeader } from '../../styles';
import DonationCard from '../../../../../components/projects/ProjectDonationCard';
import {
  removeProjectDonationRequest,
  addProjectDonationRequest,
} from '../../../../../actions/projects';

const Donations = ({ project }) => {
  const dispatch = useDispatch();

  const handleDelete = (donationId) => {
    dispatch(
      removeProjectDonationRequest({ projectId: project._id, donationId })
    );
  };

  const handleSubmit = (data, { reset }) => {
    dispatch(addProjectDonationRequest({ data, id: project._id }));
    reset();
  };

  return (
    <>
      <PageHeader>
        <div className="page-title">
          <Breadcrumb list={[{ title: 'Seções' }, { title: 'Doações' }]} />
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
        {project.donation_methods.map((donation) => (
          <DonationCard
            donation={donation}
            key={donation._id}
            showDeleteButton
            onDelete={() => handleDelete(donation._id)}
          />
        ))}
      </div>

      <Card padding style={{ marginTop: 16 }}>
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
