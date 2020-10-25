import React from 'react';
import { Link } from 'react-router-dom';
import defaultBookCover from '../../assets/default-book-cover.jpg';
import defaultArticleCover from '../../assets/default-article-cover.jpg';
import defaultVideoCover from '../../assets/default-video-cover.jpg';
import { LibraryCard } from './styles';

type LibraryItemType = {
  icon: JSX.Element;
  defaultCover: String;
  size: number;
};

export const types: { [key: string]: LibraryItemType } = {
  book: {
    icon: <BookIcon />,
    defaultCover: defaultBookCover,
    size: 280,
  },
  article: {
    icon: <ArticleIcon />,
    defaultCover: defaultArticleCover,
    size: 200,
  },
  video: {
    icon: <VideoIcon />,
    defaultCover: defaultVideoCover,
    size: 130,
  },
};

import {
  FiBook as BookIcon,
  FiVideo as VideoIcon,
  FiFile as ArticleIcon,
  FiBookmark as BookmarkButton,
} from 'react-icons/fi';

const ItemCard = ({ item }: any) => (
  <LibraryCard type={item.type}>
    <div className="card-cover">
      <div className="card-type">{types[item.type].icon}</div>
      <Link to={`/library/${item.type}s/${item.id}`} className="card-image">
        <img
          alt="item cover"
          src={
            item.cover && item.cover
              ? item.cover
              : types[item.type].defaultCover
          }
        />
      </Link>

      <div className="card-buttons">
        <BookmarkButton />
      </div>
    </div>

    <Link to={`/library/${item.type}s/${item.id}`} className="link">
      <h2 className="card-title">{item.title}</h2>
    </Link>

    <h2 className="card-author">{item.author.name}</h2>
  </LibraryCard>
);

export default ItemCard;
