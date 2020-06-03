import React from 'react';
import ErrorIcon from 'react-ionicons/lib/IosAlertOutline';
import SucessIcon from 'react-ionicons/lib/IosCheckmarkCircleOutline';
import WarningIcon from 'react-ionicons/lib/IosWarning';
import InfoIcon from 'react-ionicons/lib/IosInformationCircleOutline';
import { Container } from './styles';

const messages = {
  success: <SucessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

// eslint-disable-next-line import/prefer-default-export
export const Alert = ({ status = 'error', message = 'Erro' }) => (
  <Container status={status}>
    {messages[status]}
    <span>{message}</span>
  </Container>
);
