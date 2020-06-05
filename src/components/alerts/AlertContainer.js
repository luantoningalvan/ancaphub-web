import React from 'react';
import { useTransition } from 'react-spring';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { Toast } from '../ui';

const ToastContainer = () => {
  const messages = useSelector((state) => state.alerts);

  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    }
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
