import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiXCircle } from 'react-icons/fi';

import { Card, CardBody, CardHeader, Collapse } from '../ui';

const FAQQuestion = styled.div`
  & > div {
    margin-top: 8px;
  }

  svg {
    cursor: pointer;
    transition: transform 0.2s;
    transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const ProjectFaq = ({ question, showDeleteButton, onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <FAQQuestion key={question.question} open={open}>
      <Card>
        <CardHeader
          title={question.question}
          style={{ padding: '8px 16px' }}
          actions={[
            {
              type: 'icon',
              label: <FiXCircle />,
              show: showDeleteButton,
              action: onDelete,
            },
            {
              type: 'icon',
              label: <FiChevronDown />,
              show: true,
              action: () => setOpen(!open),
            },
          ]}
        />
        <Collapse expanded={open}>
          <CardBody>
            <p>{question.answer}</p>
          </CardBody>
        </Collapse>
      </Card>
    </FAQQuestion>
  );
};
export default ProjectFaq;
