import React from 'react';
import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import { useDispatch } from 'react-redux';
import { TextField } from '../../../../../components/ui';
import { Button, Card, CardHeader, CardBody, Breadcrumbs } from 'snake-ui';
import { PageHeader } from '../../styles';
import ProjectFAQCard from '../../../../../components/projects/ProjectFAQCard';
import {
  removeProjectFAQRequest,
  addProjectFAQRequest,
} from '../../../../../actions/projects';

const FAQ: React.FC<{ project: any }> = ({ project }) => {
  const dispatch = useDispatch();

  const handleDelete = (faqId: string) => {
    dispatch(removeProjectFAQRequest({ projectId: project._id, faqId }));
  };

  const handleSubmit: SubmitHandler = (data, { reset }) => {
    dispatch(addProjectFAQRequest({ data, id: project._id }));
    reset();
  };

  return (
    <>
      <PageHeader>
        <div className="page-title">
          <Breadcrumbs list={[{ title: 'Seções' }, { title: 'FAQ' }]} />
          <h2>FAQ</h2>
        </div>
      </PageHeader>

      {project.faq.map((question: any) => (
        <ProjectFAQCard
          question={question}
          key={question._id}
          showDeleteButton
          onDelete={() => handleDelete(question._id)}
        />
      ))}

      <Card style={{ marginTop: 8 }}>
        <CardHeader title="Adicionar nova pergunta" />
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <TextField placeholder="Pergunta" name="question" />
            <TextField placeholder="Resposta" name="answer" multiline />
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

export default FAQ;
