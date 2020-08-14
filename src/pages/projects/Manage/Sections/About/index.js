import React from 'react';
import { Form } from '@unform/web';
import { Breadcrumb, Button } from '../../../../../components/ui';
import { PageHeader } from '../../styles';
import FullEditor from '../../../../../components/editor/FullEditor';

const About = () => {
  return (
    <Form>
      <PageHeader>
        <div className="page-title">
          <Breadcrumb list={[{ title: 'Seções' }, { title: 'Sobre' }]} />
          <h2>Sobre</h2>
        </div>

        <Button type="submit" color="secondary">
          Salvar
        </Button>
      </PageHeader>
      <FullEditor name="about" />
    </Form>
  );
};

export default About;
