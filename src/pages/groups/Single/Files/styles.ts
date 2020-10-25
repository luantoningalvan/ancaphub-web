import styled from 'styled-components';

export const FileExplorer = styled.div`
  margin-top: 16px;
  table {
    width: 100%;
    text-align: left;
    border-spacing: 0px;
    color: ${(props) => props.theme.palette.text.primary};

    thead {
      tr {
        font-size: 0.6875rem;
        letter-spacing: 1px;
        line-height: 1;
      }
    }

    th {
      user-select: none;
      border-bottom: 1px solid ${(props) => props.theme.palette.border};
      padding: 1rem;
    }
    th:hover {
      cursor: pointer;
      color: ${(props) => props.theme.palette.text.secondary};
    }
    td {
      padding: 0.3333333333rem 1rem;
      vertical-align: middle;
      svg {
        height: 32px;
        width: 32px;
        margin-right: 8px;
      }
    }
    td:hover {
      cursor: pointer;
    }
    tr:nth-child(even) {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  ul {
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    padding: 8px;

    svg {
      fill: ${(props) => props.theme.palette.text.primary};
    }
  }
`;
