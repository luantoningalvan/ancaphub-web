import styled from 'styled-components';

export const LinksListContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 8px 0px;
  }
  ul li {
    padding: 8px 0px;
  }
  ul li a {
    color: ${(props) => props.theme.palette.text.primary};
  }
  ul li svg {
    float: left;
    fill: ${(props) => props.theme.palette.text.primary};
    margin-right: 8px;
  }
`;
