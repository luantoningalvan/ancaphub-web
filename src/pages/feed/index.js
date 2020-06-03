import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getPostsRequest as getPostsAction } from '../../actions/posts';

import { Container } from '../../components/ui';

import PostForm from '../../components/posts/PostForm';
import LastItemsWidget from '../../components/library/LastItemsWidget';
import ShowPosts from '../../components/posts/ShowPosts';

const Feed = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  const { items, loading } = useSelector((state) => state.posts);

  return (
    <Container style={{ marginTop: 8 }}>
      <div
        style={{
          marginTop: 16,
          display: 'grid',
          gridTemplateColumns: '8fr 4fr',
          gap: '16px',
        }}
      >
        <div>
          <PostForm />
          <div style={{ marginTop: 16, width: '100%' }}>
            <ShowPosts posts={items} loading={loading} />
          </div>
        </div>
        <div>
          <LastItemsWidget />
        </div>
      </div>
    </Container>
  );
};

export default Feed;
