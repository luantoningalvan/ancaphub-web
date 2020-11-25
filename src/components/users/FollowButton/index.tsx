import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Button } from 'snake-ui';
import {
  followUserRequest,
  unfollowUserRequest,
} from '../../../redux/actions/relationships';

const FollowButton: React.FC<{ user: any }> = ({ user }) => {
  const dispatch = useDispatch();
  const state = useSelector((relState: any) => relState.relationships[user]);
  const relationship = state || {};
  const auth = useSelector((authState: any) => authState.auth);
  const verifyIfIsOwnProfile =
    auth.isAuthenticated && auth.user.username === user;

  const [following, setFollowing] = React.useState<boolean>(false);

  const handleFollow = () => {
    dispatch(followUserRequest(user));
    setFollowing(true);
  };

  const handleUnfollow = () => {
    dispatch(unfollowUserRequest(user));
    setFollowing(false);
  };

  React.useEffect(() => {
    if (relationship.following) {
      setFollowing(true);
    }
  }, [setFollowing, relationship]);

  if (verifyIfIsOwnProfile) {
    return null;
  }

  const getText = (isFollowing: boolean) => {
    if (isFollowing) {
      return <FormattedMessage id="common.following" />;
    }
    if (!isFollowing && state && state.followedBy) {
      return <FormattedMessage id="common.followBack" />;
    }
    if (!isFollowing) {
      return <FormattedMessage id="common.follow" />;
    }

    return <></>;
  };

  return (
    <Button
      color="primary"
      variant={following ? 'contained' : 'outlined'}
      onClick={following ? handleUnfollow : handleFollow}
    >
      {getText(following)}
    </Button>
  );
};

export default FollowButton;
