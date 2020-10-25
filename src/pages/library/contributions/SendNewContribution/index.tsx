import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  FiPlay as VideoIcon,
  FiBook as BookIcon,
  FiFileText as ArticleIcon,
} from 'react-icons/fi';
import LibraryCard from '../../../../components/library/LibraryCard';

import { TextField } from '../../../../components';
import { Button, Container, Grid, Paper, Stepper } from 'snake-ui';
import { Contribute, UploadBox } from './styles';

export default () => {
  const [form, setForm] = useState('');
  const [step, setStep] = useState(1);

  const handleForm = (formAttr: any) => {
    setForm(formAttr);
    setStep(2);
  };

  const steps = [
    {
      label: <FormattedMessage id="library.contribute.type" />,
      description: <FormattedMessage id="library.contribute.typeDescription" />,
    },
    {
      label: <FormattedMessage id="library.contribute.content" />,
      description: (
        <FormattedMessage id="library.contribute.contentDescription" />
      ),
    },
    {
      label: <FormattedMessage id="library.contribute.exhibition" />,
      description: (
        <FormattedMessage id="library.contribute.exhibitionDescription" />
      ),
    },
    {
      label: <FormattedMessage id="library.contribute.confirm" />,
      description: (
        <FormattedMessage id="library.contribute.confirmDescription" />
      ),
    },
  ];

  return (
    <Container>
      <div style={{ margin: '32px 0px' }}>
        <Stepper // @ts-ignore
          steps={steps.map((step) => ({ label: step.label }))}
          currentStep={step}
          setStepAction={setStep}
        />
      </div>

      <Contribute>
        <h3>{steps[step - 1].description}</h3>

        {step === 1 && (
          <Paper padding>
            <ul>
              <li>
                <button type="button" onClick={() => handleForm('article')}>
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
        )}

        {step === 2 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Paper padding style={{ width: '100%' }}>
              <FormattedMessage id="common.title">
                {(msg) => (
                  <TextField
                    name="title"
                    placeholder={msg}
                    style={{ marginBottom: 8 }}
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="common.author">
                {(msg) => (
                  <TextField
                    name="author"
                    placeholder={msg}
                    style={{ marginBottom: 8 }}
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="common.description">
                {(msg) => (
                  <TextField
                    name="description"
                    multiline
                    placeholder={msg}
                    style={{ marginBottom: 8, paddingBottom: 80 }}
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="common.categories">
                {(msg) => (
                  <TextField
                    name="category"
                    placeholder={msg}
                    style={{ marginBottom: 8 }}
                  />
                )}
              </FormattedMessage>

              <h3 style={{ fontSize: '1em', margin: '16px 0px' }}>
                <FormattedMessage id="library.contribute.downloadOptions" />
              </h3>
              <UploadBox>
                <FormattedMessage id="library.contribute.noneSelected" />
              </UploadBox>
            </Paper>

            <Button
              color="primary"
              onClick={() => setStep(3)}
              style={{ margin: '16px 0px' }}
            >
              <FormattedMessage id="common.next" />
            </Button>
          </div>
        )}

        {step === 3 && (
          <Grid spacing={4} style={{ width: '600px' }}>
            <Grid xs={7}>
              <Paper padding style={{ width: '100%' }}>
                <UploadBox>
                  <FormattedMessage id="library.contribute.noneSelected" />
                </UploadBox>
                <Button
                  color="primary"
                  onClick={() => setStep(3)}
                  style={{ marginTop: 16 }}
                >
                  <FormattedMessage id="common.next" />
                </Button>
              </Paper>
            </Grid>
            <Grid xs={5}>
              <h3
                style={{
                  fontSize: '0.9em',
                  fontWeight: 'normal',
                  marginBottom: '16px',
                }}
              >
                <FormattedMessage id="common.preview" />
              </h3>
              <LibraryCard
                item={{
                  type: form,
                  title: <FormattedMessage id="common.untitled" />,
                }}
              />
            </Grid>
          </Grid>
        )}
      </Contribute>
    </Container>
  );
};
