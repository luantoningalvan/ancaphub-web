import styled from 'styled-components';

export const ChatboxWrapper = styled.div`
  display: flex;
  flex: 1;
  border-radius: 5px;
  padding: 1em 0px;
  height: calc(100vh - 64px);
  & > .paper {
    padding: 0 !important;
    display: flex;
    width: calc(100vw - 64px);
  }
`;
