import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiBell } from 'react-icons/fi';
import { Button } from 'snake-ui';
import { followProjectRequest } from '../../../actions/projects';

const FollowProjectButton = ({ project }: any) => {
  const dispatch = useDispatch();
  const relationship = useSelector(
    (state: any) => state.projects.relationships[project]
  );
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    if (relationship && relationship.following) {
      setFollowing(true);
    }
  }, [setFollowing, relationship]);

  const handleFollow = () => {
    dispatch(followProjectRequest(project));
    setFollowing(true);
  };

  const handleUnfollow = () => {
    dispatch(followProjectRequest(project));
    setFollowing(false);
  };

  return (
    <Button
      color="primary"
      variant={following ? 'contained' : 'outlined'}
      onClick={following ? handleUnfollow : handleFollow}
    >
      <FiBell />

      {following ? 'Seguindo' : 'Seguir'}
    </Button>
  );
};

export default FollowProjectButton;
