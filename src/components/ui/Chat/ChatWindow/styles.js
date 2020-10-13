import styled from 'styled-components';

export const EnterMessageInputWrapper = styled.form`
  padding: 8px;
  height: 64px;
  display: flex;
  border-top: 1px solid ${(props) => props.theme.palette.border};

  & > div.messageInput {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid ${(props) => props.theme.palette.border};
    border-radius: 8px;
    padding: 0px 16px;

    & > i {
      svg {
        fill: white;
      }
    }

    & > input {
      border: none;
      font-family: Ubuntu;
      color: #eee;
      background: transparent;
      height: 40px;
      outline: none;
      font-size: 14px;
      flex: 1;

      &::placeholder {
        color: #eee;
        font-size: 14px;
      }
    }
  }
`;

export const ChatInfoWrapper = styled.div`
  padding: 16px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.border};
  background: rgba(0, 0, 0, 0.1);
  & > .block {
    padding: 16px 8px;
    display: inherit;
    flex-direction: column;
    & > img {
      width: 24px;
      height: 24px;
      border-radius: 100%;
    }
  }

  & > .grow {
    flex-grow: 1;
  }
`;
