import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import UserAvatar from '../../users/UserAvatar';
import { addCommentRequest } from '../../../redux/actions/comments';
import { CommentFormContainer, CommentInput } from './styles';

interface CommentFormProps {
  post: any;
}

const CommentForm: React.FC<CommentFormProps> = ({ post }) => {
  const [commentData, setCommentData] = useState({ content: '' });
  const authUser = useSelector((state: any) => state.auth.user);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setCommentData({ content: e.target.value });
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      if (commentData.content !== '') {
        dispatch(addCommentRequest(commentData, post));
        setCommentData({ content: '' });
      }
    }
  };

  return (
    <CommentFormContainer>
      <UserAvatar user={authUser} style={{ marginRight: 10 }} />
      <FormattedMessage id="components.commentBox.writeAComment">
        {(txt: string) => (
          <CommentInput
            type="text"
            placeholder={txt}
            color="secondary"
            onKeyPress={handleKeyPress}
            value={commentData.content}
            onChange={handleChange}
          />
        )}
      </FormattedMessage>
    </CommentFormContainer>
  );
};

export default CommentForm;
