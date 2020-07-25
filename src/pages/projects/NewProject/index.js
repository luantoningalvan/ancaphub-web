import React, { useState } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import {
  Container,
  Paper,
  Hero,
  Button,
  TextField,
  Select,
} from '../../../components/ui';

const NewProject = () => {
  const [step] = useState(1);

  return (
    <Container>
      <Hero
        title="Criar Projeto"
        description="Atraia público para sua iniciativa e os informe de novidades"
        actions={
          <Link to="/projects">
            <Button variant="outlined" color="primary">
              Cancelar
            </Button>
          </Link>
        }
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 600,
          width: '100%',
          margin: '16px auto',
        }}
      >
        <Paper padding style={{ width: '100%', marginTop: 32 }}>
          {step === 1 && (
            <Form onSubmit={() => ({})}>
              <TextField placeholder="Nome do Projeto" name="name" />
              <Select type="select" placeholder="Categoria" name="category" />
              <TextField multiline placeholder="Descrição" name="description" />
              <Button fullWidth color="secondary" style={{ marginTop: 16 }}>
                Criar Projeto
              </Button>
            </Form>
          )}
        </Paper>
      </div>
    </Container>
  );
};

export default NewProject;
