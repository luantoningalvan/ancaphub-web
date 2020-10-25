import styled from 'styled-components';

export const TrendingList = styled.ul`
  li {
    margin-bottom: 15px;
    list-style: none;
    border-bottom: 1px solid ${(props) => props.theme.palette.border};
    padding-bottom: 15px;

    &:last-child {
      padding: 0;
      margin: 0;
      border: none;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 1.1em;
    color: ${(props) => props.theme.palette.text.primary};
  }

  span {
    color: ${(props) => props.theme.palette.text.secondary};
    font-size: 0.9em;
    font-weight: lighter;
  }
`;
