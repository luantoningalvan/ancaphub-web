import styled from 'styled-components';
import { Paper } from 'snake-ui';

export const EventContainer = styled.div`
  margin-top: 16px;
`;

export const EventInfo = styled(Paper)`
    width: 100%;
    padding: 16px;

    p {
      padding: 8px;
      font-size: 1em;
    }

    li {
      display: flex;
      align-items: center;
      padding: 8px;
    }
    li svg {
      height: 26px;
      width: 26px;
      margin-right: 16px;
    }
`;

export const EventHeader = styled.div`
    border-radius: 8px;
    height: 320px;
    width: 100%;
    overflow: hidden;
    position: relative;

    .event-cover {
      position: absolute;
      width: 100%;
      border-radius: 16px;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.65) 20%,
          rgba(0, 0, 0, 0) 100%
        );
      }
    }

    .event-header-content {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px;
    }
    .event-date {
      height: 60px;
      width: 60px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

      span {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .day {
        background: ${(props) => props.theme.palette.paperDark};
        height: 48px;
        font-weight: bold;
        font-size: 1.4em;
      }
      .month {
        font-size: 0.8em;
        background: ${(props) => props.theme.palette.primary};
        height: 24px;
      }
    }
    .time {
      display: block;
      color: ${(props) => props.theme.palette.secondary};
      margin: 16px 0px 0px;
    }
    h2 {
      font-size: 1.8em;
    }
    .event-location {
      margin-top: 8px;
      display: flex;
      align-items: center;

      svg {
        height: 28px;
        width: 28px;
        margin-left: -6px;
        margin-right: 2px;
        color: ${(props) => props.theme.palette.primary};
      }
    }
`;
