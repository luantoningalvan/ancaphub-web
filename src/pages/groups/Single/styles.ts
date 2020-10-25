import styled from 'styled-components';

export const GroupHeader = styled.div`
  height: 64px;
  width: 100%;
  background: ${(props) => props.theme.palette.paperDark};
  border-bottom: 1px solid ${(props) => props.theme.palette.border};

  h2 {
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1.3em;
  }

  .group-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    width: 100%;
  }
`;
