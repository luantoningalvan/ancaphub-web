/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { FiCreditCard } from 'react-icons/fi';

const DonationCard = styled.div`
  position: relative;
  background: ${(props) => props.theme.palette.paper};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  word-wrap: wrap;
  display: flex;
  align-items: center;

  .icon {
    svg {
      width: 64px;
      height: auto;
    }

    display: flex;
    align-items: center;

    margin-right: 16px;
  }

  h4 {
    font-size: 1.4em;
    line-height: 100%;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.9em;
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;

const ProjectDonationCard = ({ donation }) => {
  const getIcon = () => {
    return <FiCreditCard />;
  };

  return (
    <DonationCard>
      <div className="icon">{getIcon(donation.type)}</div>

      <div>
        <h4>{donation.title}</h4>
        <p>{donation.description}</p>
      </div>
    </DonationCard>
  );
};

export default ProjectDonationCard;
