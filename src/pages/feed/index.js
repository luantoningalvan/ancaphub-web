import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getPostsRequest as getPostsAction,
  getMorePostsRequest,
} from '../../actions/posts';

import { Container } from '../../components/ui';

import PostForm from '../../components/posts/PostForm';
import LastItemsWidget from '../../components/library/LastItemsWidget';
import ShowPosts from '../../components/posts/ShowPosts';
import { FeedContainer } from './styles';

const Feed = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  const { items, loading } = useSelector((state) => state.posts);

  return (
    <Container style={{ marginTop: 8 }}>
      <FeedContainer>
        <div id="posts">
          <PostForm />
          <div style={{ marginTop: 16, width: '100%' }}>
            <ShowPosts
              posts={items}
              loading={loading}
              getMore={getMorePostsRequest}
            />
          </div>
        </div>
        <div id="sidebar">
          <LastItemsWidget />
          <div style={{ marginTop: 16 }} />
        </div>
      </FeedContainer>
    </Container>
  );
};

export default Feed;
