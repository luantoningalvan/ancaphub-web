import React, { useState } from 'react';
import { TextField } from '../../../../../components';
import { FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player';

export default () => {
  const [videoUrl, setVideoUrl] = useState(undefined);
  return (
    <>
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
      <TextField
        name="author"
        placeholder="URL do Vídeo"
        onChange={(e: any) => setVideoUrl(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      <div>
        {videoUrl !== undefined && (
          <ReactPlayer url={videoUrl} style={{ marginBottom: 16 }} />
        )}
      </div>
      <FormattedMessage id="common.description">
        {(msg) => (
          <TextField
            name="description"
            multiline
            placeholder={msg}
            rows={1}
            style={{ marginBottom: 8, paddingBottom: 80 }}
          />
        )}
      </FormattedMessage>
    </>
  );
};
