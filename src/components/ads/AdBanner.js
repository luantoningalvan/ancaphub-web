import React from 'react';
import { Card } from '../ui';

const AdBanner = ({ ad }) => {
  return (
    <Card>
      <a href={ad.link} target="_blank" rel="noreferrer">
        <img src={ad.banner} alt="" style={{ width: '100%' }} />
      </a>
    </Card>
  );
};

export default AdBanner;
