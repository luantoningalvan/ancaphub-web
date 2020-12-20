import React from 'react';

import { FiAlertTriangle } from 'react-icons/fi';

import { AdviceContainer } from './styles';

const Advice = ({ title, description }: any) => (
  <AdviceContainer>
    <FiAlertTriangle size={40} />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </AdviceContainer>
);

export default Advice;
