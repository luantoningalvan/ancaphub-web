import React, { useEffect, memo } from 'react';
import { FiX as CloseIcon } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { getPostLikesRequest } from '../../actions/posts';
import UserList from '../users/UserList';

import { Dialog, Card, CardHeader, CardBody, Spinner } from '../ui';

const LikeBox = ({ open, onClose, postId }) => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.posts);

  useEffect(() => {
    if (open) {
      dispatch(getPostLikesRequest(postId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Dialog show={open}>
      {open && (
        <Card style={{ minWidth: 350 }}>
          <CardHeader
            title={<FormattedMessage id="common.likePlural" />}
            action={{
              type: 'icon',
              show: true,
              action: onClose,
              label: <CloseIcon />,
            }}
          />
          <CardBody>
            {likes.postLikesLoading ? (
              <Spinner size={48} />
            ) : (
              <UserList users={likes.items[postId].likes} />
            )}
          </CardBody>
        </Card>
      )}
    </Dialog>
  );
};

export default memo(LikeBox);
