import React, { useState } from 'react';
import { TextField } from '../../../../../components';
import SelectAuthor from '../../../../../components/authors/SelectAuthor';
import { FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player';
import { Grid } from 'snake-ui';

export default () => {
  const [videoUrl, setVideoUrl] = useState(undefined);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormattedMessage id="common.title">
          {(msg) => (
            <TextField
              name="title"
              placeholder={msg}
              style={{ marginBottom: 8 }}
            />
          )}
        </FormattedMessage>
      </Grid>
      <Grid item xs={12}>
        <SelectAuthor />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="video_url"
          placeholder="URL do Vídeo"
          onChange={(e: any) => setVideoUrl(e.target.value)}
          style={{ marginBottom: 8 }}
        />
      </Grid>

      {videoUrl !== undefined && (
        <Grid item xs={12}>
          <ReactPlayer url={videoUrl} style={{ marginBottom: 16 }} />
        </Grid>
      )}

      <Grid item xs={12}>
        <FormattedMessage id="common.description">
          {(msg) => (
            <TextField
              name="content"
              multiline
              placeholder={msg}
              rows={1}
              style={{ marginBottom: 8, paddingBottom: 80 }}
            />
          )}
        </FormattedMessage>
      </Grid>
    </Grid>
  );
};
