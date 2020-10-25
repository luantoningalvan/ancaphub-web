import styled from 'styled-components';

export const PageHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.7em;
    color: ${(props) => props.theme.palette.text.primary};
    margin-top: 8px;
  }
`;

export const SettingsContainer = styled.div`
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
      margin: 8px 0;
    }
  }
`;

export const SettingsSidebarContainer = styled.div`
  grid-area: sidebar;

  .group-name {
    margin: 16px;
    display: flex;
    align-items: center;

    img {
      height: 54px;
      width: 54px;
      border-radius: 100%;
    }

    h2 {
      margin-left: 16px;
    }
  }

  .back-to-project {
    color: ${(props) => props.theme.palette.text.secondary};
    display: flex;
    align-items: center;
    margin: 16px 0px;
    font-size: 1.1em;

    svg {
      margin-right: 8px;
      transition: 0.2s;
    }

    &:hover {
      svg {
        margin-left: -4px;
        margin-right: 12px;
      }
    }
  }
`;

export const SettingsContentContainer = styled.div`
  grid-area: content;
`;
