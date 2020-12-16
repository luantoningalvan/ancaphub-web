import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse } from 'snake-ui';
import CommentForm from '../CommentForm';
import Comment from '../SingleComment';

import { loadCommentsRequest } from '../../../redux/actions/comments';

interface CommentBoxProps {
  post: any;
  expanded?: boolean;
  indent?: boolean;
}

const CommentBox: React.FC<CommentBoxProps> = ({ expanded, post, indent }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state: any) => state.comments[post]);

  useEffect(() => {
    if (expanded) {
      dispatch(loadCommentsRequest(post));
    }
  }, [expanded]);

  return (
    <Collapse expanded={expanded}>
      <div style={{ margin: indent ? '10px 0px 10px 43px' : 'none' }}>
        <CommentForm post={post} />
        <div style={{ padding: '0px 16px 16px 16px', textAlign: 'center' }}>
          {comments !== undefined &&
            comments.map((comment: any) => (
              <Comment key={comment.id} comment={comment} post={post} />
            ))}
        </div>
      </div>
    </Collapse>
  );
};

export default CommentBox;
