import styled from 'styled-components';

export const InfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 16px;
`;

export const InfoCard = styled.li`
  background: ${(props) => props.theme.palette.primary};
  width: 100%;
  padding: 16px;
  list-style: none;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 80px;
    width: 80px;
    fill: rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-weight: lighter;
    margin-top: 5px;
  }
  span {
    display: block;
    font-size: 2em;
    font-weight: bold;
    line-height: 100%;
  }
`;
