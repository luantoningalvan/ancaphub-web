import styled from 'styled-components';

export const FooterNavigation = styled.footer`
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 121;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.palette.paper};
  display: flex;
  padding: 0px 16px;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const SideNavigation = styled.aside`
  width: 64px;
  height: calc(100vh - 64px);
  position: fixed;
  z-index: 121;
  top: 64px;
  left: 0;
  background: ${(props) => props.theme.palette.paper};
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    display: none;
  }
`;
