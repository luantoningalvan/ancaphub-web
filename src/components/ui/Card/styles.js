import styled from 'styled-components';
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.palette.paper};
  color: ${(props) => props.theme.palette.text.primary};
  border: ${(props) =>
    props.bordered ? `1px solid ${props.theme.palette.border}` : "none"};
  border-radius: 10px;
`;

export const CardHeaderContainer = styled.div`
  padding: 16px 16px 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1em;
  }

  svg {
    fill: ${(props) => props.theme.palette.text.primary};
  }
`;

export const CardBodyContainer = styled.div`
  padding: 16px;
`;

export const CardFooterContainer = styled(Link)`
  width: 100%;
  text-align: center;
  padding: 15px;
  color: ${(props) => props.theme.palette.text.primary};
  text-decoration: none;
  border-top: 1px solid ${(props) => props.theme.palette.border};
  transition: 0.3s;
  border-radius: 0px 0px 10px 10px;
  &:hover {
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;
