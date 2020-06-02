import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 16px;
  left: 80px;
  background: ${(props) => props.theme.palette.alert[props.status]};
  border-radius: 8px;
  color: white;
  padding: 16px;
  display: flex;
  align-items:center;
  span { font-size: 1em; line-height: 1em;}
  svg { fill: white; margin-right: 8px;}
`;