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
    <Dialog
      show={open}
      style={{ width: '100%', maxWidth: 350, maxHeight: '90vh' }}
    >
      {open && (
        <Card>
          <CardHeader
            title={<FormattedMessage id="common.likePlural" />}
            action={{
              type: 'icon',
              show: true,
              action: onClose,
              label: <CloseIcon />,
            }}
          />
          <CardBody style={{ overflowX: 'auto' }}>
            {likes.postLikesLoading ? (
              <div
                style={{
                  width: '100%',
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Spinner size={48} />
              </div>
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
