import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

import { Card, CardBody, CardHeader, Collapse } from '../../../components/ui';

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

const ProjectFaq = ({ project }) => {
  const [openQuestions, setOpenQuestions] = useState(() =>
    project.faq.map(() => false)
  );

  return (
    <>
      {project.faq.map((question, index) => (
        <FAQQuestion key={question.question} open={openQuestions[index]}>
          <Card>
            <CardHeader
              title={question.question}
              style={{ padding: '8px 16px' }}
              action={{
                type: 'icon',
                label: <FiChevronDown />,
                show: true,
                action: () =>
                  setOpenQuestions({
                    ...openQuestions,
                    [index]: !openQuestions[index],
                  }),
              }}
            />
            <Collapse expanded={openQuestions[index]}>
              <CardBody>
                <p>{question.answer}</p>
              </CardBody>
            </Collapse>
          </Card>
        </FAQQuestion>
      ))}
    </>
  );
};
export default ProjectFaq;
