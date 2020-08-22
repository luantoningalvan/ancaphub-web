/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { FiCreditCard, FiXCircle } from 'react-icons/fi';

const DonationCard = styled.div`
  position: relative;
  background: ${(props) => props.theme.palette.paper};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  word-wrap: wrap;
  display: flex;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    background: #d62000;
    color: white;
    border: none;
    font-size: 18px;
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    top: -5px;
    right: -5px;
    border-radius: 50%;

    svg {
      height: 20px;
    }
  }

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

const ProjectDonationCard = ({ donation, showDeleteButton, onDelete }) => {
  const getIcon = () => {
    return <FiCreditCard />;
  };

  return (
    <DonationCard>
      {showDeleteButton && (
        <button type="button" onClick={onDelete}>
          <FiXCircle />
        </button>
      )}
      <div className="icon">{getIcon(donation.type)}</div>

      <div>
        <h4>{donation.title}</h4>
        <p>{donation.description}</p>
      </div>
    </DonationCard>
  );
};

export default ProjectDonationCard;
