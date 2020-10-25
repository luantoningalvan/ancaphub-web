import React from 'react';
import defaultCover from '../../../assets/default-book-cover.jpg';
import { MiniLIbraryCardSyle } from './styles';

const MiniLIbraryCard = ({ item }: any) => (
  <MiniLIbraryCardSyle
    to={`/library/${item.type}s/${item._id}`}
    cover={item.cover ? item.cover : defaultCover}
  >
    <div className="cover" />
    <div className="content">
      <h4 className="title">{item.title.substr(0, 49)}</h4>
      <h5 className="author">{item.author.name.substr(0, 49)}</h5>
    </div>
  </MiniLIbraryCardSyle>
);

export default MiniLIbraryCard;
