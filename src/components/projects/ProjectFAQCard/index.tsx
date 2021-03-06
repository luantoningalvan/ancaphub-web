import React, { useState } from 'react';
import { FiChevronDown, FiXCircle } from 'react-icons/fi';

import { Card, CardBody, CardHeader, Collapse } from 'snake-ui';
import { FAQQuestion } from './styles';

interface ProjectFaqProps {
  question: {
    question: string;
    answer: string;
  };
  showDeleteButton?: boolean;
  onDelete?(): void;
}

const ProjectFaq: React.FC<ProjectFaqProps> = ({
  question: questionItem,
  showDeleteButton,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);
  const { question, answer } = questionItem;
  return (
    <FAQQuestion key={question} open={open}>
      <Card>
        <CardHeader
          title={question}
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
            <p>{answer}</p>
          </CardBody>
        </Collapse>
      </Card>
    </FAQQuestion>
  );
};
export default ProjectFaq;
