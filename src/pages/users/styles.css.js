import styled from 'styled-components';

export const UserCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  column-gap: 16px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
