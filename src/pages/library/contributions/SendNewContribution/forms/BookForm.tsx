import React from 'react';
import { TextField, UploadBox } from '../../../../../components';
import { FormattedMessage } from 'react-intl';

export default () => (
  <>
    <FormattedMessage id="common.title">
      {(msg) => (
        <TextField name="title" placeholder={msg} style={{ marginBottom: 8 }} />
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
  </>
);
