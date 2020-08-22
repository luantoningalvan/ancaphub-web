import React from 'react';
import styled from 'styled-components';
import DonationCard from '../../../components/projects/ProjectDonationCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const ProjectDonations = ({ project }) => (
  <Grid>
    {project.donation_methods &&
      project.donation_methods.map((donation) => (
        <div key={donation.name}>
          <DonationCard donation={donation} />
        </div>
      ))}
  </Grid>
);

export default ProjectDonations;
