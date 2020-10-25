import styled from 'styled-components';
import { Paper } from 'snake-ui';

export const Toolbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

export const Sidebar = styled(Paper)`
  width: 100%;
  padding: 16px;
  height: calc(100vh - 160px);

  > .search {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.palette.border};
    display: flex;
    padding: 16px;
    justify-content: space-between;
    margin-bottom: 16px;

    input {
      border: none;
      background: transparent;
      height: 100%;
      color: ${(props) => props.theme.palette.text.primary};
    }

    svg {
      width: 20px;
      height: 100%;
      fill: ${(props) => props.theme.palette.text.primary};
    }
  }
`;
