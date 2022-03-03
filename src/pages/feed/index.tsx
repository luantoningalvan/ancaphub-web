import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsRequest as getPostsAction,
  getMorePostsRequest,
} from "../../redux/actions/posts";

import { Container, Grid } from "snake-ui";

import PostForm from "../../components/posts/PostForm";
import LastItemsWidget from "../../components/library/LastItemsWidget";
import ShowPosts from "../../components/posts/ShowPosts";

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
          <div style={{ marginTop: 16, width: "100%" }}>
            <ShowPosts posts={items} getMore={getMorePostsRequest} />
          </div>
        </Grid>
        <Grid xs={12} md={6} lg={4} id="sidebar">
          <div style={{ position: "sticky", top: 80 }}>
            <LastItemsWidget />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feed;
