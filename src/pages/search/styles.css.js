import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'sidebar content';
  grid-template-rows: auto;
  gap: 16px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    & > div {
      margin: 8px 0;
    }
  }
`;

export const InnerSearchGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 16px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SearchSidebarContainer = styled.div`
  grid-area: sidebar;
`;

export const SearchContentContainer = styled.div`
  grid-area: content;
`;

export const SearchResultType = styled.div`
  h3 {
    margin-bottom: 16px;
  }
  & + div {
    margin-bottom: 16px;
  }
`;
