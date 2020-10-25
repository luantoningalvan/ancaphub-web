import React from 'react';
import { Paper, CircularLoader } from 'snake-ui';

const LoadContent: React.FC<{ loading: boolean }> = ({ loading, children }) => (
  <>
    {loading ? (
      <Paper
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularLoader size={72} />
      </Paper>
    ) : (
      <>{children}</>
    )}
  </>
);

export default LoadContent;
