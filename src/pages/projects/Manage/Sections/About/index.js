import React from 'react';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import { convertToRaw } from 'draft-js';
import { Breadcrumb, Button } from '../../../../../components/ui';
import { PageHeader } from '../../styles';
import FullEditor from '../../../../../components/editor/FullEditor';
import { updateProjectAboutRequest } from '../../../../../actions/projects';

const About = ({ project }) => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    const toRaw = JSON.stringify(convertToRaw(data.about.getCurrentContent()));

    dispatch(
      updateProjectAboutRequest({
        data: { about: toRaw },
        id: project._id,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} initialData={{ about: project.about }}>
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
