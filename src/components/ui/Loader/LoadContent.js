import React from 'react';
import {Paper} from '../Paper';
import Spinner from './Spinner';

export default ({ loading, children }) => (
  <>
    {loading ? (
      <Paper style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      >
        <Spinner />
      </Paper>
    ) : (
      <>
        {children}
      </>
    )}
  </>
);
