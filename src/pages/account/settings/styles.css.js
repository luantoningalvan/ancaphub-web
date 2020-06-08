import styled from 'styled-components';

export const SettingsContainer = styled.div`
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

export const SettingsSidebarContainer = styled.div`
  grid-area: sidebar;
`;

export const SettingsContentContainer = styled.div`
  grid-area: content;
`;
