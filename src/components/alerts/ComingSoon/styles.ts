import styled from 'styled-components';

export const AdviceContainer = styled.div`
  padding: 32px;
  border-radius: 8px;
  margin: 16px 0px;
  background: ${(props) => props.theme.palette.secondary};
  color: #333;
  display: flex;
  align-items: center;
  > div {
    margin-left: 16px;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 8px;
  }
`;
