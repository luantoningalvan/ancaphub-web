import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FiX as CloseButton } from 'react-icons/fi';
import { TextField, UploadBox } from '../..';
import {
  Button,
  IconButton,
  Modal,
  CardHeader,
  CardBody,
  Grid,
} from 'snake-ui';

interface CreateEventProps {
  open: boolean;
  onClose(): void;
}

const CreateEvent: React.FC<CreateEventProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <div style={{ width: 400 }}>
      <CardHeader>
        <h3>
          <FormattedMessage id="events.create" />
        </h3>
        <IconButton icon={<CloseButton />} onClick={onClose} />
      </CardHeader>

      <CardBody>
        <Grid spacing={2} style={{ marginLeft: 8 }}>
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
      </CardBody>
    </div>
  </Modal>
);

export default CreateEvent;
