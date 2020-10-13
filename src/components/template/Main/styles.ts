import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  @media (min-width: 576px) {
    width: calc(100% - 64px);
    margin-left: 64px;
  }
`;
