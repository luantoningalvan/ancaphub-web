import React from 'react';
import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import { useDispatch } from 'react-redux';
import { TextField } from '../../../../../components';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Breadcrumbs,
  Grid,
} from 'snake-ui';
import { PageHeader } from '../../styles';
import ProjectFAQCard from '../../../../../components/projects/ProjectFAQCard';
import {
  removeProjectFAQRequest,
  addProjectFAQRequest,
} from '../../../../../redux/actions/projects';

const FAQ: React.FC<{ project: any }> = ({ project }) => {
  const dispatch = useDispatch();

  const handleDelete = (faqId: string) => {
    dispatch(removeProjectFAQRequest({ projectId: project.id, faqId }));
  };

  const handleSubmit: SubmitHandler = (data, { reset }) => {
    dispatch(addProjectFAQRequest({ data, id: project.id }));
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

      {project.faq !== null &&
        project.faq.map((question: any) => (
          <ProjectFAQCard
            question={question}
            key={question.id}
            showDeleteButton
            onDelete={() => handleDelete(JSON.parse(question).id)}
          />
        ))}

      <Card style={{ marginTop: 16 }}>
        <CardHeader title="Adicionar nova pergunta" />
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField placeholder="Pergunta" name="question" />
              </Grid>
              <Grid item xs={12}>
                <TextField placeholder="Resposta" name="answer" multiline />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" color="secondary" fullWidth>
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default FAQ;
