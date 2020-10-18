import styled from 'styled-components';

export const Avatar = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
