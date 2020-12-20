import React from 'react';
import DonationCard from '../../../../components/projects/ProjectDonationCard';
import { Grid } from 'snake-ui';

const ProjectDonations = ({ project }: any) => (
  <Grid container spacing={2}>
    {project.donation_methods &&
      JSON.parse(project.donation_methods).map((donation: any) => (
        <Grid item xs={12} md={2} lg={3} key={donation.name}>
          <DonationCard donation={donation} />
        </Grid>
      ))}
  </Grid>
);

export default ProjectDonations;
