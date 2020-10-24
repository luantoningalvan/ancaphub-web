import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Card, CardHeader, CardBody, CardFooter } from 'snake-ui';
import { TrendingList } from './styles';

const TrendingTopicsWidget = () => (
  <div style={{ width: '100%' }}>
    <Card>
      <CardHeader>
        <h3>
          <FormattedMessage id="common.trending" />
        </h3>
      </CardHeader>
      <CardBody>
        <TrendingList>
          <li>
            <h4>#Trending 1</h4>
            <span>100 posts</span>
          </li>
          <li>
            <h4>#Trending 2</h4>
            <span>100 posts</span>
          </li>
          <li>
            <h4>#Trending 3</h4>
            <span>100 posts</span>
          </li>
          <li>
            <h4>#Trending 4</h4>
            <span>100 posts</span>
          </li>
        </TrendingList>
      </CardBody>
      <CardFooter link="/" label={<FormattedMessage id="common.showMore" />} />
    </Card>
  </div>
);

export default TrendingTopicsWidget;
