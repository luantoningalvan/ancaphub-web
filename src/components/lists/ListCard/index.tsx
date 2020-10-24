import React from 'react';
import { FiList as ListIcon } from 'react-icons/fi';
import { Paper } from 'snake-ui';
import { ListCardWrap } from './styles';

interface ListCardProps {
  list: {
    cover?: string;
    itemsCount: number;
    title: string;
  };
}

const ListCard: React.FC<ListCardProps> = ({ list }) => (
  <ListCardWrap>
    <Paper className="list-cover">
      <img src={list.cover} alt="list cover" />
      <span>
        {list.itemsCount}
        <ListIcon />
      </span>
    </Paper>
    <h4>{list.title}</h4>
  </ListCardWrap>
);

export default ListCard;
