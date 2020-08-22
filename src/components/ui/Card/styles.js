import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;

  ${(props) => css`
    background: ${props.theme.palette.paper};
    color: ${props.theme.palette.text.primary};
    border: ${props.bordered
      ? `1px solid ${props.theme.palette.border}`
      : 'none'};

    svg {
      color: ${props.theme.palette.text.primary};
    }
  `}
`;

export const CardHeaderContainer = styled.div`
  padding: 16px 16px 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1em;
  }

  .actions {
    display: flex;

    button + button {
      margin-left: 8px;
    }
  }
`;

export const CardBodyContainer = styled.div`
  padding: 16px;

  &::-webkit-scrollbar {
    width: 0.2em;
  }

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    overflow: visible;
    border-radius: 5px;
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    &::-webkit-scrollbar {
      opacity: 1;
    }
  }
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
