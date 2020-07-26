/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const DonationCard = styled.div`
  position: relative;
  background: ${(props) => props.theme.palette.paper};
  width: 100%;
  padding: 16px;
  padding-top: 40px;
  border-radius: 8px;
  margin-top: 32px;
  word-wrap: wrap;

  .icon {
    position: absolute;
    top: -32px;
    width: 64px;
    height: 64px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }

  h4 {
    font-size: 1.4em;
    margin-bottom: 8px;
  }

  font-size: 0.9em;
`;

const ProjectDonationCard = ({ donation }) => (
  <DonationCard>
    <img src={donation.icon} className="icon" alt="payment app icon" />

    <h4>{donation.name}</h4>
    <ul>
      <li>
        <FormattedMessage
          id="projects.paymentAppUsername"
          values={{
            username: 'ancapitao_miguxo_xd',
            b: (...chunks) => <b>{chunks}</b>,
          }}
        />
      </li>
    </ul>
  </DonationCard>
);

export default ProjectDonationCard;
