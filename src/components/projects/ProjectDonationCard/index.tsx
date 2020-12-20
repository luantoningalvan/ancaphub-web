/* eslint-disable react/display-name */
import React from 'react';
import { FiCreditCard, FiXCircle } from 'react-icons/fi';
import { DonationCard } from './styles';

interface ProjectDonationCardProps {
  donation: {
    type: string;
    title: string;
    description: string;
  };
  showDeleteButton?: boolean;
  onDelete?(): void;
}

const ProjectDonationCard: React.FC<ProjectDonationCardProps> = ({
  donation,
  showDeleteButton,
  onDelete,
}) => {
  const getIcon = () => {
    return <FiCreditCard />;
  };

  console.log(donation);
  return (
    <DonationCard>
      {showDeleteButton && (
        <button type="button" onClick={onDelete}>
          <FiXCircle />
        </button>
      )}
      <div className="icon">{getIcon()}</div>

      <div>
        <h4>{donation.title}</h4>
        <p>{donation.description}</p>
      </div>
    </DonationCard>
  );
};

export default ProjectDonationCard;
