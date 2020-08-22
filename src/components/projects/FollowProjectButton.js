import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiBell } from 'react-icons/fi';
import { Button } from '../ui';
import { followProjectRequest } from '../../actions/projects';

const FollowProjectButton = ({ project }) => {
  const dispatch = useDispatch();
  const relationship = useSelector(
    (state) => state.projects.relationships[project]
  );
  const [following, setFollowing] = useState(null);

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
      variant={following ? 'normal' : 'outlined'}
      onClick={following ? handleUnfollow : handleFollow}
    >
      <FiBell />

      {following ? 'Seguindo' : 'Seguir'}
    </Button>
  );
};

export default FollowProjectButton;
