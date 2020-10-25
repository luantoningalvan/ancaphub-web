import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
// import { isEmpty } from 'lodash';
import { LoadContent } from '../../';
import { Card, CardFooter, CardHeader, CardBody } from 'snake-ui';

import { getRecentItemsRequest } from '../../../actions/library';
import MiniLibraryCard from '../MiniLibraryCard';

const LastItems = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LastItemsWidget = () => {
  const dispatch = useDispatch();
  const { recentItems: items, loading } = useSelector(
    (state: any) => state.library
  );

  React.useEffect(() => {
    dispatch(getRecentItemsRequest());
  }, [dispatch]);

  return (
    <div style={{ width: '100%' }}>
      <Card>
        <CardHeader title={<FormattedMessage id="common.lastItems" />} />

        <CardBody>
          <LoadContent loading={loading}>
            <LastItems>
              {items ? (
                items.map((item: any) => (
                  <MiniLibraryCard key={item._id} item={item} />
                ))
              ) : (
                <p>Nenhum item recente.</p> // translator's note: TRANSLATE THIS!
              )}
            </LastItems>
          </LoadContent>
        </CardBody>
        <CardFooter
          link="/library"
          label={<FormattedMessage id="common.showMore" />}
        />
      </Card>
    </div>
  );
};

export default LastItemsWidget;
