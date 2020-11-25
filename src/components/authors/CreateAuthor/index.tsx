import { Form } from '@unform/core';
import TextField from 'components/form/TextField';
import Checkbox from 'components/form/Checkbox';
import React from 'react';
import { Button, Grid, Modal } from 'snake-ui';

interface CreateAuthorProps {
  open: boolean;
  onClose(): void;
}

const CreateAuthor: React.FC<CreateAuthorProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} title="Criar Autor" showCloseIcon>
      <div style={{ padding: '0 16px 16px 16px' }}>
        <Form onSubmit={() => {}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="name" placeholder="Nome do autor" />
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                name="name"
                placeholder="Nome do autor"
                options={[
                  { id: '1', label: 'Eu sou o autor', value: 'its_me' },
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth>Criar e selecionar</Button>
            </Grid>
          </Grid>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateAuthor;
