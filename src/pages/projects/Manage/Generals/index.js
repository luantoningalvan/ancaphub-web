import React from 'react';
import { Form } from '@unform/core';
import { TextField, Button, Breadcrumb } from '../../../../components/ui';
import { PageHeader } from '../styles';

const Generals = () => {
  return (
    <>
      <PageHeader>
        <div className="page-title">
          <Breadcrumb list={[{ title: 'Gerais' }]} />
          <h2>Gerais</h2>
        </div>
      </PageHeader>
      <Form
        onSubmit={() => {}}
        initialData={{
          name: 'AncapHub',
          description:
            'Plataforma EM DESENVOLVIMENTO que irá conectar e formar libertários ao redor de todo planeta.',
        }}
      >
        <TextField placeholder="Nome do Projeto" name="name" />
        <TextField placeholder="Descrição" name="description" multiline />

        <Button color="primary" style={{ float: 'right', marginTop: 16 }}>
          Salvar
        </Button>
      </Form>
    </>
  );
};

export default Generals;
