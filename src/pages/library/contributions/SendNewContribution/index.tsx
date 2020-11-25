import React, { useRef, useState, useContext, createContext } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  FiPlayCircle as VideoIcon,
  FiBook as BookIcon,
  FiFileText as ArticleIcon,
} from 'react-icons/fi';

import { Button, Container, Grid, Paper, Hero, Card, CardBody } from 'snake-ui';
import { Contribute } from './styles';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import CreateAuthor from '../../../../components/authors/CreateAuthor';
import BookForm from './forms/BookForm';
import ArticleForm from './forms/ArticleForm';
import VideoForm from './forms/VideoForm';
import { convertToRaw } from 'draft-js';

import { Dropzone } from 'components';
import { useDispatch } from 'react-redux';
import { createItemRequest } from '../../../../redux/actions/library';

const forms = {
  book: <BookForm />,
  article: <ArticleForm />,
  video: <VideoForm />,
};

export const CreateAuthorDialog = createContext<any>({});

export default () => {
  const [form, setForm] = useState<'book' | 'article' | 'video' | undefined>();
  const [step, setStep] = useState(1);
  const [createAuthor, setCreateAuthor] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { goBack } = useHistory();
  const dispatch = useDispatch();

  const handleForm = (formAttr: any) => {
    setForm(formAttr);
    setStep(2);
  };

  async function handleSubmit(data: any) {
    try {
      const schema = Yup.object().shape({
        author_id: Yup.string().required('É necessário escolher um autor'),
        title: Yup.string().required('É necessário fornecer um título'),
        content: Yup.mixed().test(
          'editor-is-empty',
          'O conteúdo do artigo não pode estar vazio',
          function () {
            return data.content.getCurrentContent().hasText();
          }
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);

      dispatch(
        createItemRequest({
          ...data,
          type: form,
          content: JSON.stringify(
            convertToRaw(data.content.getCurrentContent())
          ),
          cover: '',
        })
      );
    } catch (err) {
      const validationErrors: any = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef?.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <CreateAuthorDialog.Provider
        value={{ open: createAuthor, toggleDialog: setCreateAuthor }}
      >
        <CreateAuthor
          open={createAuthor}
          onClose={() => setCreateAuthor(false)}
        />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Hero
            title="Enviar contribuição"
            description="Conheça as regras e o processo de aprovação antes de enviar sua contribuição"
            actions={
              <>
                <Button color="neutral" onClick={() => goBack()} type="button">
                  Cancelar
                </Button>
                <Button disabled={step === 1} style={{ marginLeft: 8 }}>
                  Enviar
                </Button>
              </>
            }
          />
          <Contribute>
            {step === 1 && (
              <>
                <h3 style={{ marginTop: 32 }}>Selecione o tipo de material</h3>

                <Paper padding style={{ minWidth: 500 }}>
                  <ul>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleForm('article')}
                      >
                        <ArticleIcon />
                        <h4>
                          <FormattedMessage id="common.article" />
                        </h4>
                      </button>
                    </li>

                    <li>
                      <button type="button" onClick={() => handleForm('book')}>
                        <BookIcon />
                        <h4>
                          <FormattedMessage id="common.book" />
                        </h4>
                      </button>
                    </li>

                    <li>
                      <button type="button" onClick={() => handleForm('video')}>
                        <VideoIcon />
                        <h4>
                          <FormattedMessage id="common.video" />
                        </h4>
                      </button>
                    </li>
                  </ul>
                </Paper>
              </>
            )}

            {step === 2 && form !== undefined && (
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Paper padding>{forms[form]}</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <h3
                      style={{
                        margin: 0,
                        padding: '16px 16px 0px 16px',
                        fontSize: '1rem',
                      }}
                    >
                      Capa
                    </h3>
                    <CardBody>
                      <Dropzone />
                    </CardBody>
                  </Card>
                </Grid>
              </Grid>
            )}
          </Contribute>
        </Form>
      </CreateAuthorDialog.Provider>
    </Container>
  );
};
