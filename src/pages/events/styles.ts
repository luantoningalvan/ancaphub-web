import styled from 'styled-components';
import { Calendar as RCBC } from 'react-big-calendar';

export const Calendar = styled(RCBC)`
  background: ${(props) => props.theme.palette.paperDark};
  padding: 16px;
  border-radius: 8px;

  .rbc-toolbar {
    margin: 16px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .month-switch,
  .view-switch {
    display: flex;
    align-items: center;
  }

  .month-switch {
    span {
      font-size: 1.1em;
      font-weight: bold;
      padding: 0px 16px;
    }
    svg {
      height: 20px;
      width: 20px;
      color: ${(props) => props.theme.palette.text.secondary};
    }
  }

  .view-switch {
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.palette.border};
    overflow: hidden;
    button {
      padding: 12px;
      background: transparent;
      color: ${(props) => props.theme.palette.text.secondary};
      border-right: 1px solid ${(props) => props.theme.palette.border};
      cursor: pointer;
      &:last-child {
        border: none;
      }

      &:hover {
        background: ${(props) => props.theme.palette.border};
      }
    }
  }

  .rbc-month-view {
    display: flex;
    flex-direction: column;
  }

  .rbc-row {
    display: flex;
  }
  .rbc-header,
  .rbc-row-content,
  .rbc-row,
  .rbc-date-cell {
    flex: 1;
  }

  .rbc-header {
    text-align: center;
    padding: 20px 0px;
    color: ${(props) => props.theme.palette.text.secondary};
    font-size: 0.9em;
  }

  .rbc-date-cell {
    position: relative;
    height: 104px;
    padding: 16px;
    border-top: 1px solid ${(props) => props.theme.palette.border};
    border-right: 1px solid ${(props) => props.theme.palette.border};
    cursor: pointer;

    a {
      color: ${(props) => props.theme.palette.text.secondary};
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .rbc-off-range {
    cursor: auto;
    background-color: ${(props) => props.theme.palette.paper};

    &:hover {
      background-color: ${(props) => props.theme.palette.paper};
    }
  }
  .rbc-row-segment {
    position: absolute;
    z-index: 100;
    font-size: 0.7em;
    background-color: ${(props) => props.theme.palette.secondary};
    padding: 8px;
    border-radius: 4px;
    margin-top: 50px;
  }
`;
