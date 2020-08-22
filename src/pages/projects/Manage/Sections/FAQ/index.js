import React from 'react';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import {
  Breadcrumb,
  Card,
  CardHeader,
  CardBody,
  TextField,
  Button,
} from '../../../../../components/ui';
import { PageHeader } from '../../styles';
import ProjectFAQCard from '../../../../../components/projects/ProjectFAQCard';
import {
  removeProjectFAQRequest,
  addProjectFAQRequest,
} from '../../../../../actions/projects';

const FAQ = ({ project }) => {
  const dispatch = useDispatch();

  const handleDelete = (faqId) => {
    dispatch(removeProjectFAQRequest({ projectId: project._id, faqId }));
  };

  const handleSubmit = (data, { reset }) => {
    dispatch(addProjectFAQRequest({ data, id: project._id }));
    reset();
  };

  return (
    <>
      <PageHeader>
        <div className="page-title">
          <Breadcrumb list={[{ title: 'Seções' }, { title: 'FAQ' }]} />
          <h2>FAQ</h2>
        </div>
      </PageHeader>

      {project.faq.map((question) => (
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
