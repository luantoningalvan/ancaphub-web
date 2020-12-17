import React from 'react';
import { FormattedMessage } from 'react-intl';
import { TextField, UploadBox } from '../..';
import { Button, Modal, Grid } from 'snake-ui';
import { Form } from '@unform/web';

interface CreateEventProps {
  open: boolean;
  onClose(): void;
}

const CreateEvent: React.FC<CreateEventProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose} title="Criar Evento" showCloseIcon>
    <div style={{ margin: '0 16px 16px 16px', width: 500 }}>
      <Form onSubmit={(data: any) => console.log(data)}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <FormattedMessage id="common.title">
              {(msg) => <TextField name="title" placeholder={msg} />}
            </FormattedMessage>
          </Grid>
          <Grid xs={12}>
            <FormattedMessage id="nearby.location">
              {(msg) => <TextField name="location" placeholder={msg} />}
            </FormattedMessage>
          </Grid>
          <Grid xs={12}>
            <FormattedMessage id="common.description">
              {(msg) => (
                <TextField
                  name="description"
                  placeholder={msg}
                  style={{ paddingBottom: 40 }}
                />
              )}
            </FormattedMessage>
          </Grid>
          <Grid xs={6}>
            <FormattedMessage id="events.starts">
              {(msg) => <TextField name="startAt" placeholder={msg} />}
            </FormattedMessage>
          </Grid>
          <Grid xs={6}>
            <FormattedMessage id="events.ends">
              {(msg) => <TextField name="endsAt" placeholder={msg} />}
            </FormattedMessage>
          </Grid>
          <Grid xs={12}>
            <h4 style={{ marginBottom: 8, fontSize: '0.8em' }}>
              <FormattedMessage id="common.cover" />
            </h4>
            <UploadBox>
              <FormattedMessage id="components.imageUpload.dragHere" />
            </UploadBox>
          </Grid>
          <Grid xs={12}>
            <Button color="secondary">
              <FormattedMessage id="common.publish" />
            </Button>
          </Grid>
        </Grid>
      </Form>
    </div>
  </Modal>
);

export default CreateEvent;
