import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, LoadContent } from '../ui';

import { getAddRequest } from '../../actions/ads';

const AdBanner = () => {
  const dispatch = useDispatch();
  const { ad, loading } = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(getAddRequest());
  }, []);

  return (
    <LoadContent loading={loading}>
      <Card style={{ marginTop: 16, overflow: 'hidden' }}>
        <a href={ad.link} target="_blank" rel="noreferrer">
          <img src={ad.banner} alt="" style={{ width: '100%' }} />
        </a>
      </Card>
    </LoadContent>
  );
};

export default AdBanner;
