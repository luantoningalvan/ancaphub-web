import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Table = styled.table`
  border-radius: 8px;
  background: ${(props) => props.theme.palette.paper};
  width: 100%;
  border-spacing: 0px;

  thead th {
    padding: 8px 16px;
    border-bottom: 1px solid ${(props) => props.theme.palette.border};
    text-align: left;
  }

  tbody {
    padding: 8px 0px;
  }

  tbody th {
    font-weight: normal;
    padding: 8px 16px;
    text-align: left;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
