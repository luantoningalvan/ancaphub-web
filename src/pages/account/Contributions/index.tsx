import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  FiCheckCircle as ApprovedIcon,
  FiAlertTriangle as ReprovedIcon,
  FiAward as PointsIcon,
  FiZap as PendingIcon,
} from 'react-icons/fi';
import { Container, Hero, Button } from 'snake-ui';
import { InfoCard, InfoList } from './styles';

const Contributions = () => (
  <Container>
    <Hero
      title={
        <FormattedMessage
          id="common.contributions"
          description="Título da página de contribuições"
        />
      }
      actions={
        <Button color="primary" variant="outlined">
          <FormattedMessage id="library.contribute" />
        </Button>
      }
    />

    <div>
      <InfoList>
        <InfoCard>
          <div>
            <span>5</span>
            <h3>
              <FormattedMessage id="library.status.approvedPlural" />
            </h3>
          </div>
          <ApprovedIcon />
        </InfoCard>
        <InfoCard>
          <div>
            <span>2</span>
            <h3>
              <FormattedMessage id="library.status.underAnalysis" />
            </h3>
          </div>
          <PendingIcon />
        </InfoCard>
        <InfoCard>
          <div>
            <span>1</span>
            <h3>
              <FormattedMessage id="library.status.rejectedPlural" />
            </h3>
          </div>
          <ReprovedIcon />
        </InfoCard>
        <InfoCard>
          <div>
            <span>90</span>
            <h3>
              <FormattedMessage id="library.points" />
            </h3>
          </div>
          <PointsIcon />
        </InfoCard>
      </InfoList>
    </div>
  </Container>
);

export default Contributions;
