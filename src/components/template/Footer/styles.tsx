import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.palette.border};
  margin: 32px 0;
  padding-top: 32px;
  width: 100%;
`;

export const FooterLinks = styled.ul`
  list-style-type: none;
  text-align: center;

  & > li {
    margin: 0 8px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const FooterLinkItem = styled.li`
  display: inline;
  & > a {
    color: ${(props) => props.theme.palette.text.secondary};
    text-decoration: none;
    font-weight: lighter;
    font-size: 1em;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialNetworks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  a {
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.palette.text.primary};
    margin: 8px;
    font-size: 22px;
  }
`;
