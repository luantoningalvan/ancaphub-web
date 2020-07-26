import React from 'react';
import DonationCard from '../../../components/projects/ProjectDonationCard';

const ProjectDonations = ({ project }) => (
  <div>
    {project.donations &&
      project.donations.map((donation) => (
        <div xs={4} key={donation.name}>
          <DonationCard donation={donation} />
        </div>
      ))}
  </div>
);

export default ProjectDonations;
