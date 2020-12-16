import React from 'react';
import { TextField } from '../../../../../components';
import SelectAuthor from '../../../../../components/authors/SelectAuthor';
import { FormattedMessage } from 'react-intl';
import FullEditor from 'components/editor/FullEditor';
import { Grid } from 'snake-ui';

export default () => {
  return (
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
        <FullEditor name="content" />
      </Grid>
    </Grid>
  );
};
