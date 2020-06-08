import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FiCheckCircle as VotedIcon } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import { votePostPollRequest } from '../../actions/posts';

const PostPollWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 8px;
  position: relative;
  margin-top: 16px;
  border: 1px solid ${(props) => props.theme.palette.border};

  > span {
    font-size: 16px;
    margin-top: 8px;
  }
`;

const PostPollOption = styled.div`
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.palette.border};
  cursor: ${(props) => (props.hasVoted ? 'default' : 'pointer')};
  transition: background-color 200ms ease-in-out;

  .option-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;

    div {
      display: flex;
      justify-content: space-between;
      height: 17px;
      font-size: 17px;
      line-height: 100%;

      svg {
        display: block;
      }

      svg {
        margin-left: 8px;
      }
    }
  }

  .progress-bar {
    margin: 8px;
    border-radius: 3px;
    height: 6px;
    overflow: hidden;
    background-color: ${(props) => props.theme.palette.background};
  }

  &:hover {
    background-color: ${(props) =>
      props.hasVoted ? 'transparent' : props.theme.palette.border};
  }

  & + div {
    margin-top: 8px;
  }
`;

const PostPollOptionProgress = styled.div`
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => props.theme.palette.secondary};
  height: 6px;
`;

const PostPoll = ({ post }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const hasVoted = post.poll.allVotes.includes(user._id);

  const handleVote = ({ pollId, vote, postId }) => {
    if (hasVoted) return;
    dispatch(votePostPollRequest({ postId, pollId, vote }));
  };
  return (
    <PostPollWrap>
      {post.poll.options.map((option) => (
        <PostPollOption
          hasVoted={hasVoted}
          key={option._id}
          onClick={() =>
            handleVote({
              pollId: post.media.data,
              postId: post._id,
              vote: option.title,
            })
          }
        >
          <div className="option-title">
            <div>
              <span>{option.title}</span>
              {option.votes && option.votes.includes(user._id) && <VotedIcon />}
            </div>

            <span>
              {option.votesCount === 0
                ? 0
                : (option.votesCount / post.poll.allVotesCount) * 100}
              %
            </span>
          </div>

          <div className="progress-bar">
            <PostPollOptionProgress
              percentage={
                option.votesCount === 0
                  ? 0
                  : (option.votesCount / post.poll.allVotesCount) * 100
              }
            />
          </div>
        </PostPollOption>
      ))}
      <span>
        <FormattedMessage
          id="components.postPoll.votesTotal"
          values={{ votes: post.poll.allVotesCount || 0 }}
        />
      </span>
    </PostPollWrap>
  );
};
export default PostPoll;
