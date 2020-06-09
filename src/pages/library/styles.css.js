import styled from 'styled-components';
import { Menu } from '../../components/ui';

export const LibraryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'sidebar content';
  grid-template-rows: auto;
  gap: 16px;
  margin-top: 16px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    & > div {
      margin: 16px 0;
    }
  }
`;

export const LibrarySidebarContainer = styled.div`
  grid-area: sidebar;
`;

export const LibraryContentContainer = styled.div`
  grid-area: content;
`;

export const LibraryCardGrid = styled.div`
  column-count: 3;
  column-gap: 16px;

  > div {
    display: inline-block;
    margin: 0 0 16px;
    width: 100%;
  }

  @media only screen and (max-width: 992px) {
    column-count: 2;
  }

  @media only screen and (max-width: 370px) {
    column-count: 1;
  }
`;

export const LibrarySidebarMenu = styled(Menu)`
  max-height: 208px;
  @media only screen and (max-width: 768px) {
    overflow-y: hidden;
    overflow-x: auto;
  }
`;
