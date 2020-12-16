import { Form, FormHandles } from '@unform/core';
import TextField from 'components/form/TextField';
import Checkbox from 'components/form/Checkbox';
import React, { useRef, useState } from 'react';
import { Button, CircularLoader, Grid, Modal } from 'snake-ui';
import { useDispatch, useSelector } from 'react-redux';
import { createAuthorRequest } from '../../../redux/actions/authors';

interface CreateAuthorProps {
  open: boolean;
  onClose(): void;
  afterAdd?(result: any): void;
}

const CreateAuthor: React.FC<CreateAuthorProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (data: { name: string; its_me: boolean }) => {
    setLoading(true);
    dispatch(createAuthorRequest(data, onClose));
  };

  return (
    <Modal open={open} onClose={onClose} title="Criar Autor" showCloseIcon>
      <div style={{ padding: '0 16px 16px 16px', width: '500px' }}>
        {!loading ? (
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="name" placeholder="Nome do autor" />
              </Grid>
              <Grid item xs={12}>
                <Checkbox
                  name="its_me"
                  options={[
                    { id: '1', label: 'Eu sou o autor', value: 'its_me' },
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  onClick={() => formRef.current?.submitForm()}
                >
                  Criar e selecionar
                </Button>
              </Grid>
            </Grid>
          </Form>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}
          >
            <CircularLoader size={72} />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CreateAuthor;
