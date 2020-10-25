import styled from 'styled-components';

export const MessageSearchWrap = styled.div`
  padding: 16px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.border};
  background: rgba(0, 0, 0, 0.1);

  & > div.searchInput {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.theme.palette.border};
    border-radius: 5px;

    & > i {
      padding: 4px 4px 4px 8px;
      svg {
        fill: white;
      }
    }

    & > input {
      border: none;
      font-family: Ubuntu;
      color: #eee;
      background: transparent;
      height: 50px;
      padding: 10px;
      outline: none;
      flex-grow: 1;

      &::placeholder {
        color: #eee;
        font-size: 1em;
      }
    }
  }
`;
