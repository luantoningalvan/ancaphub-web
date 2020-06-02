import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import {isEmpty} from 'lodash'
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  LoadContent,
} from '../ui'

import { getRecentItemsRequest } from '../../actions/library';
import MiniLibraryCard from './MiniLibraryCard';

const LastItems = styled.div`
  padding:0;
  margin:0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Item = styled(Link)`
  display: flex;
  border-radius: 4px;
  background: ${(props) => props.theme.palette.paperDark};
  overflow: hidden;
  cursor: pointer;
  height: 95px;
  text-decoration:none;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.08);
  
  &:hover { 
    background-color: rgba(0,0,0,0.03); 
  }
  
  margin-bottom: 10px;

  &:last-child { margin-bottom: 0 }
`;

const ItemCover = styled.div`
  width: 70px;
  height: 95px;
  overflow: hidden;
  background-image: url(${(props) => props.cover});
  background-size: cover;
  background-position: center;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1em;
  flex: 1;

  .title {
    font-weight: bold;
    font-size: 1.1em;
    max-height:2.2em;
    margin-bottom:5px;
    color: ${(props) => props.theme.palette.text.primary};
    overflow:hidden;
  }

  .author {
    font-weight: lighter;
    font-size: 14px;
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;

const LastItemsWidget = () => {
  const dispatch = useDispatch();
  const { recentItems: items, loading } = useSelector((state) => state.library);

  React.useEffect(() => {
    dispatch(getRecentItemsRequest());
  }, [dispatch]);

  return (
    <div style={{ width: '100%' }}>
      <Card>
        <CardHeader title={<FormattedMessage id="common.lastItems"/>} />

        <CardBody>
          <LoadContent loading={loading}>
            {items && !isEmpty(items) ? (
            <LastItems>
            {items && items.map((item) => (
              <MiniLibraryCard item={item} />
            ))}
          </LastItems>
            ) : (
              <p>Nenhum item recente</p>
            )}

          </LoadContent>
        </CardBody>
        <CardFooter link="/library" label={<FormattedMessage id="common.showMore" />} />
      </Card>
    </div>
  );
};

export default LastItemsWidget;
