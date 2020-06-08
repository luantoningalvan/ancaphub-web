import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FiX as CloseButton } from 'react-icons/fi';
import {
  Dialog,
  Button,
  CardHeader,
  CardBody,
  TextField,
  UploadBox,
  IconButton,
} from '../ui';

const CreateEvent = ({ open, onClose }) => (
  <Dialog show={open} onClose={onClose}>
    <div style={{ width: 400 }}>
      <CardHeader>
        <h3>
          <FormattedMessage id="events.create" />
        </h3>
        <IconButton icon={<CloseButton />} onClick={onClose} />
      </CardHeader>

      <CardBody>
        <div spacing={2} style={{ marginLeft: 8 }}>
          <div xs={12}>
            <FormattedMessage id="common.title">
              {(msg) => <TextField placeholder={msg} />}
            </FormattedMessage>
          </div>
          <div xs={12}>
            <FormattedMessage id="nearby.location">
              {(msg) => <TextField placeholder={msg} />}
            </FormattedMessage>
          </div>
          <div xs={12}>
            <FormattedMessage id="common.description">
              {(msg) => (
                <TextField placeholder={msg} style={{ paddingBottom: 40 }} />
              )}
            </FormattedMessage>
          </div>
          <div xs={6}>
            <FormattedMessage id="events.starts">
              {(msg) => <TextField placeholder={msg} />}
            </FormattedMessage>
          </div>
          <div xs={6}>
            <FormattedMessage id="events.ends">
              {(msg) => <TextField placeholder={msg} />}
            </FormattedMessage>
          </div>
          <div xs={12}>
            <h4 style={{ marginBottom: 8, fontSize: '0.8em' }}>
              <FormattedMessage id="common.cover" />
            </h4>
            <UploadBox>
              <FormattedMessage id="components.imageUpload.dragHere" />
            </UploadBox>
          </div>
          <div xs={12}>
            <Button fullwidth color="secondary">
              <FormattedMessage id="common.publish" />
            </Button>
          </div>
        </div>
      </CardBody>
    </div>
  </Dialog>
);

export default CreateEvent;
