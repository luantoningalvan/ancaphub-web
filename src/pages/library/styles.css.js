import styled from 'styled-components';
import { Menu } from '../../components/ui';

export const LibraryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'sidebar content';
  grid-template-rows: auto;
  gap: 16px;
  margin-top: 8px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    & > div {
      margin: 8px 0;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  column-gap: 16px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LibrarySidebarMenu = styled(Menu)`
  max-height: 208px;
  @media only screen and (max-width: 768px) {
    overflow-y: hidden;
    overflow-x: auto;
  }
`;
