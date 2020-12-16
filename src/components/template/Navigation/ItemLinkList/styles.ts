import styled, { css } from 'styled-components';

export const ItemLinkListContainer = styled.ul`
  height: 100vh;
  display: flex;
  flex: 1;
  margin-left: 16px;

  @media (min-width: 576px) {
    height: 64px;
    margin-left: 0px;
    margin-top: 8px;
    flex-direction: column;
  }
`;
