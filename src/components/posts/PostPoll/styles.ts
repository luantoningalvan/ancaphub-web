import styled from 'styled-components';

export const PostPollWrap = styled.div`
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

export const PostPollOption = styled.div<{ hasVoted: boolean }>`
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

export const PostPollOptionProgress = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => props.theme.palette.secondary};
  height: 6px;
`;
