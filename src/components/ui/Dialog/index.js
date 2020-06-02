import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {ContainerDialog} from './styles';
import {Paper} from '../Paper';

const Dialog = ({ show, children }) => {
  useEffect(() => {
    if (!show) {
      document.body.classList.remove('modal-open');
    } else {
      document.body.classList.add('modal-open');
    }
  }, [show]);

  if (!show) return null;

  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(
    <ContainerDialog>
      <Paper className="content">
        {children}
      </Paper>
    </ContainerDialog>,
    modalRoot,
  );
};

export { Dialog }
