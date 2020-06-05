import React, { useEffect } from 'react';
import InfoIcon from 'react-ionicons/lib/IosInformationCircle';
import ErrorIcon from 'react-ionicons/lib/IosAlert';
import SuccessIcon from 'react-ionicons/lib/IosCheckmarkCircle';
import CloseIcon from 'react-ionicons/lib/MdClose';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { removeAlert } from '../../../actions/alerts';

const icons = {
  info: <InfoIcon size="24px" />,
  success: <SuccessIcon size="24px" />,
  error: <ErrorIcon size="24px" />,
};

const Toast = ({ message, style }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeAlert(message.id));
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      key={message.id}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={() => dispatch(removeAlert(message.id))}>
        <CloseIcon fontSize="18px" />
      </button>
    </Container>
  );
};

export { Toast };
