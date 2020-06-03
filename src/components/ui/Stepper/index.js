import React from 'react';
import { generate } from 'shortid';
import { Container, Step } from './styles';

const Stepper = ({ steps, currentStep, setStepAction }) => (
  <Container>
    {steps.map((step, index) => (
      <Step
        key={generate()}
        checked={currentStep > index + 1}
        current={currentStep === index + 1}
      >
        <div
          className="step-content"
          role="presentation"
          onClick={() => setStepAction(index + 1)}
        >
          <div className="step-id">{step.icon || index + 1}</div>
          <span>{step.label}</span>
        </div>
      </Step>
    ))}
  </Container>
);

export { Stepper };
