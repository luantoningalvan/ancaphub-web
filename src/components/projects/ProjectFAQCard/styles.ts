import styled from 'styled-components';

export const FAQQuestion = styled.div<{ open?: boolean }>`
  & > div {
    margin-top: 8px;
  }

  svg {
    cursor: pointer;
    transition: transform 0.2s;
    transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
