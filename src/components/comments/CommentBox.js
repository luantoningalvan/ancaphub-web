import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse } from '../ui';
import CommentForm from './CommentForm';
/*
 * Important: dependency cycles can get messy very quickly.
 * TODO: refactor this cycle.
 */
// eslint-disable-next-line import/no-cycle
import Comment from './SingleComment';
import { loadCommentsRequest } from '../../actions/comments';

const CommentBoxStyle = styled.div`
  margin: ${(props) => (props.indent ? '10px 0px 10px 43px' : 'none')};
`;

const CommentBox = ({ expanded, post, indent }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments[post]);

  useEffect(() => {
    if (expanded) {
      dispatch(loadCommentsRequest(post));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  return (
    <Collapse expanded={expanded}>
      <CommentBoxStyle indent={indent}>
        <CommentForm post={post} />
        <div style={{ padding: '0px 16px 16px 16px', textAlign: 'center' }}>
          {comments !== undefined &&
            comments.map((comment) => (
              <Comment key={comment._id} comment={comment} post={post} />
            ))}
        </div>
      </CommentBoxStyle>
    </Collapse>
  );
};

export default CommentBox;
