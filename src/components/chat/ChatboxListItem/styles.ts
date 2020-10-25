import styled, { css } from 'styled-components';

export const ChatboxListItemWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  transition: all ease-in-out 0.3s;
  padding: 8px;
  cursor: pointer;

  & > div.block {
    display: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 8px;
    & > img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }

    & > p.chatUserName {
      font-size: 0.9em;
      font-weight: bold;
      line-height: 1em;
      width: 100%;

      & > span.messageTime {
        &::before {
          content: '\u2022';
          margin: 0 0.5em;
        }
        line-height: 1em;
        font-size: 0.7em;
        color: ${(props) => props.theme.palette.text.secondary};
      }
    }

    & > p.lastMessage {
      color: ${(props) => props.theme.palette.text.secondary};
      font-size: 0.8em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 8px;
    }
  }

  &:hover {
    background: ${(props) => props.theme.palette.background};
    box-shadow: inset 5px 0 0 ${(props) => props.theme.palette.secondary};
  }

  ${(props) =>
    props.selected &&
    css`
      background: ${props.theme.palette.background};
      box-shadow: inset 5px 0 0 ${props.theme.palette.secondary};
    `}
`;
