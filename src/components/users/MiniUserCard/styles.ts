import styled from 'styled-components';

export const User = styled.div`
  padding: 8px;
  border-radius: 4px;
  background: ${(props) => props.theme.palette.paperDark};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);

  h4 {
    margin-bottom: 5px;
    font-size: 1em;
    line-height: 100%;
  }
  span {
    color: ${(props) => props.theme.palette.text.secondary};
    font-size: 0.9em;
    line-height: 100%;
    font-weight: lighter;
  }
`;

export const Avatar = styled.div<{ src?: string }>`
  height: 42px;
  width: 42px;
  overflow: hidden;
  border-radius: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin-right: 10px;
`;
