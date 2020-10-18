import styled from 'styled-components';

export const SingleCommentContainer = styled.div`
  .inner-wrap {
    display: flex;
    align-items: stretch;
    margin-bottom: 10px;
  }

  .comment-content {
    background: rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
  }

  .comment-text {
    padding-top: 3px;
    margin: 0;
    text-align: justify;
    font-size: 0.92em;
    word-wrap: normal;
    word-break: keep-all;
    & > a {
      color: ${(props) => props.theme.palette.secondary};
    }
  }

  .date {
    font-size: 0.7em;
    margin-top: 8px;

    li {
      list-style: none;
      display: inline-block;
      &:after {
        content: '·';
        margin: 0px 5px;
      }

      &:last-child {
        &:after {
          content: '';
          margin: 0;
        }
      }
    }

    span.time-link {
      color: ${(props) => props.theme.palette.text.secondary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.palette.text.secondary};
      height: 20px;
      width: 20px;
    }
  }
`;
