import styled from 'styled-components';

export const FeedContainer = styled.div`
  width: 100%;
  margin: 16px 0px;

  #sidebar {
    display: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: 16px;

    #sidebar {
      display: block;
    }
  }
`;
