import React from 'react';
import { Form } from '@unform/web';
import { AiOutlineBank } from 'react-icons/ai';
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

const Donations = () => {
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
        <Card bordered style={{ padding: 8 }}>
          <AiOutlineBank />
          <h3>titulo</h3>
          <p>decrição destas porra</p>
        </Card>
        <Card bordered style={{ padding: 8 }}>
          <AiOutlineBank />
          <h3>titulo</h3>
          <p>decrição destas porra</p>
        </Card>
        <Card bordered style={{ padding: 8 }}>
          <AiOutlineBank />
          <h3>titulo</h3>
          <p>decrição destas porra</p>
        </Card>
      </div>

      <Card padding style={{ marginTop: 16 }}>
        <CardHeader title="Adicionar novo método" />
        <CardBody>
          <Form>
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
            <Button color="secondary">Adicionar</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default Donations;
