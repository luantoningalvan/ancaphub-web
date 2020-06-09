import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserPostsRequest } from '../../actions/posts';
import PostForm from '../../components/posts/PostForm';
import PostCard from '../../components/posts/PostCard';
import { Spinner } from '../../components/ui';

const Feed = ({ user: userId }) => {
  const dispatch = useDispatch();
  const { items: posts, loading } = useSelector((state) => state.posts);
  const auth = useSelector((state) => state.auth);
  const verifyIfIsOwnProfile = auth.isAuthenticated && auth.user._id === userId;

  useEffect(() => {
    dispatch(getUserPostsRequest(userId));
  }, [dispatch, userId]);

  return (
    <>
      {verifyIfIsOwnProfile && <PostForm />}

      <div style={{ width: '100%', marginTop: 16 }}>
        {!loading ? (
          <>
            {Object.values(posts).map((item) => (
              <PostCard data={item} key={item._id} />
            ))}
          </>
        ) : (
          <div
            style={{
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              padding: 16,
            }}
          >
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Feed);
