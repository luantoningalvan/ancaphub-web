import React, { useEffect, memo } from 'react';
import CloseIcon from 'react-ionicons/lib/IosClose';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { getPostLikesRequest } from '../../actions/posts';
import UserList from '../users/UserList';

import {
  Dialog,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Spinner,
} from '../ui'

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
          <CardHeader>
            <h3><FormattedMessage id="common.likePlural" /></h3>
            <IconButton icon={<CloseIcon />} color="primary" onClick={onClose} />
          </CardHeader>
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
