import React from 'react';
import { Paper } from '../Paper';
import Spinner from './Spinner';

const LoadContent = ({ loading, children }) => (
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
        <Spinner />
      </Paper>
    ) : (
      <>{children}</>
    )}
  </>
);

export default LoadContent;
