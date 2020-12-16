import React from 'react';
import { Dropzone } from '../../../../../components';
import { TextField } from '../../../../../components';
import SelectAuthor from '../../../../../components/authors/SelectAuthor';

import { FormattedMessage } from 'react-intl';
import { Grid } from 'snake-ui';

const onDrop = (acceptedFiles: any, files: any, setFiles: any) => {
  const newFiles: any = [];
  acceptedFiles.forEach((file: any) => {
    const fileName = String(file.name);
    const extension = file.name.split('.').pop();
    const size = file.size;
    const preview = URL.createObjectURL(file);
    newFiles.push({ fileName, extension, size, preview, state: 'success' });
  });
  setFiles([...files, ...newFiles]);
};

export default () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <FormattedMessage id="common.title">
        {(msg) => <TextField name="title" placeholder={msg} />}
      </FormattedMessage>
    </Grid>
    <Grid item xs={12}>
      <SelectAuthor />
    </Grid>
    <Grid item xs={12}>
      <FormattedMessage id="common.description">
        {(msg) => <TextField name="description" multiline placeholder={msg} />}
      </FormattedMessage>
    </Grid>
    <Grid item xs={12}>
      <h3 style={{ fontSize: '1em', margin: '16px 0px' }}>
        <FormattedMessage id="library.contribute.downloadOptions" />
      </h3>
      <Dropzone
        name="cover"
        acceptedFormats={['.pdf', '.mobi', '.epub']}
        onDrop={onDrop}
        multiple
      />
    </Grid>
  </Grid>
);
