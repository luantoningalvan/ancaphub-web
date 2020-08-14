import React from 'react';
import { Form } from '@unform/web';
import {
  Breadcrumb,
  Card,
  CardHeader,
  CardBody,
  TextField,
  Button,
} from '../../../../../components/ui';
import { PageHeader } from '../../styles';

const FAQ = () => {
  return (
    <>
      <PageHeader>
        <div className="page-title">
          <Breadcrumb list={[{ title: 'Seções' }, { title: 'FAQ' }]} />
          <h2>FAQ</h2>
        </div>
      </PageHeader>
      <Card>
        <CardHeader title="Adicionar nova pergunta" />
        <CardBody>
          <Form>
            <TextField placeholder="Pergunta" name="question" />
            <TextField placeholder="Resposta" name="answer" multiline />
            <Button color="secondary">Adicionar</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default FAQ;
