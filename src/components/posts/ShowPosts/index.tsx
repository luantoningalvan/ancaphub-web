import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostCard from '../PostCard';
import { CircularLoader } from 'snake-ui';

interface ShowPostsProps {
  posts: any[];
  getMore?(data: { page: number }): void;
}

const ShowPosts: React.FC<ShowPostsProps> = ({ posts, getMore = () => {} }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleDispatch = () => {
    setPage(page + 1);
    dispatch(getMore({ page: page + 1 }));
  };

  return (
    <InfiniteScroll
      dataLength={page * 5} // This is important field to render the next data
      next={handleDispatch}
      hasMore
      scrollThreshold="80%"
      hasChildren
      loader={
        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            padding: 16,
          }}
        >
          <CircularLoader size={72} />
        </div>
      }
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {Object.values(posts).map((item) => (
        <PostCard data={item} key={item.id} />
      ))}
    </InfiniteScroll>
  );
};

export default ShowPosts;
