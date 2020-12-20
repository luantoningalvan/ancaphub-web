import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getPostsRequest as getPostsAction,
  getMorePostsRequest,
} from '../../redux/actions/posts';

import { Container, Grid } from 'snake-ui';

import PostForm from '../../components/posts/PostForm';
import LastItemsWidget from '../../components/library/LastItemsWidget';
import ShowPosts from '../../components/posts/ShowPosts';
import { FeedContainer } from './styles';
import styled from 'styled-components';

const Apoiase = styled.a`
  margin-top: 16px;
  background: #eb4a3b;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1rem;

  img {
    width: 50%;
  }
`;

const Feed = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  const { items, loading } = useSelector((state: any) => state.posts);

  return (
    <Container>
      <Grid container spacing={3} style={{ marginTop: 16 }}>
        <Grid xs={12} md={6} lg={8} id="posts">
          <PostForm />
          <div style={{ marginTop: 16, width: '100%' }}>
            <ShowPosts posts={items} getMore={getMorePostsRequest} />
          </div>
        </Grid>
        <Grid xs={12} md={6} lg={4} id="sidebar">
          <div style={{ position: 'sticky', top: 80 }}>
            <LastItemsWidget />

            <Apoiase target="_blank" href="https://apoia.se/ancaphub">
              <img src="https://apoia.se/como-funciona/img/logo.png" alt="" />
              <span>Ajude nosso site a se manter no ar</span>
            </Apoiase>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feed;
