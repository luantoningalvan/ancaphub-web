import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getPostsRequest as getPostsAction,
  getMorePostsRequest,
} from '../../actions/posts';
import { getAddRequest } from '../../actions/ads';

import { Container } from '../../components/ui';

import PostForm from '../../components/posts/PostForm';
import LastItemsWidget from '../../components/library/LastItemsWidget';
import ShowPosts from '../../components/posts/ShowPosts';
import { FeedContainer } from './styles';
import AdBanner from '../../components/ads/AdBanner';

const Feed = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsAction());
    dispatch(getAddRequest());
  }, [dispatch]);

  const { items, loading } = useSelector((state) => state.posts);
  const { ad, loading: loadingAd } = useSelector((state) => state.ads);

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
          <div style={{ marginTop: 16 }}>
            {!loadingAd && <AdBanner ad={ad} />}
          </div>
        </div>
      </FeedContainer>
    </Container>
  );
};

export default Feed;
