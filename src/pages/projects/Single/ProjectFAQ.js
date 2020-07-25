import React from 'react';
import styled from 'styled-components';
import ArrowIcon from 'react-ionicons/lib/IosArrowDown';

import { Card, CardBody, CardHeader, Collapse } from '../../../components/ui';

const FAQQuestion = styled.div`
  margin-bottom: 1em;

  svg {
    cursor: pointer;
    transform: rotate ${(props) => (props.open ? '(180deg)' : '(0deg)')};
  }
`;

export default () => {
  const [openQuestions, setOpenQuestions] = React.useState({
    0: false,
    1: false,
  });
  return (
    <>
      <FAQQuestion open={openQuestions[0]}>
        <Card>
          <CardHeader
            style={{ padding: 16 }}
            title="A plataforma será gratuita?"
            action={{
              type: 'icon',
              label: ArrowIcon,
              action: () =>
                setOpenQuestions({ ...openQuestions, 0: !openQuestions[0] }),
            }}
          />
          <Collapse expanded={openQuestions[0]}>
            <CardBody>
              <p>
                Sim, será gratuita. É possível que no futuro haja um plano PRO,
                mas este traria funções que nunca sequer foram anunciadas.
              </p>
            </CardBody>
          </Collapse>
        </Card>
      </FAQQuestion>
    </>
  );
};
