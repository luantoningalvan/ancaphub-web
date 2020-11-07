import React from 'react';
import { useTransition } from 'react-spring';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { Toast } from 'snake-ui';
import { removeAlert } from '../../../redux/actions/alerts';
import { useDispatch } from 'react-redux';

const ToastContainer = () => {
  const messages = useSelector((state: any) => state.alerts);

  const dispatch = useDispatch();

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
        <Toast
          key={key}
          style={props}
          message={item}
          duration={3000}
          showCloseButton
          onClose={() => dispatch(removeAlert(item.id))}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
