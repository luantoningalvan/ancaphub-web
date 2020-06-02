import React from 'react';
import { Container } from './styles'
import ErrorIcon from 'react-ionicons/lib/IosAlertOutline';
import SucessIcon from 'react-ionicons/lib/IosCheckmarkCircleOutline';
import WarningIcon from 'react-ionicons/lib/IosWarning';
import InfoIcon from 'react-ionicons/lib/IosInformationCircleOutline';

const messages = {
  success: <SucessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

export const Alert = ({ status = 'error', message = 'Erro' }) => (
  <Container status={status}>
    {messages[status]}
    <span>{message}</span>
  </Container>
);
