import styled from 'styled-components';

export const NotificationWrap = styled.li`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  img {
    height: 56px;
    width: 56px;
    border-radius: 100%;
  }

  .thumb {
    position: relative;
    height: 64px;
    width: 64px;
    margin-right: 16px;
  }

  .icon {
    height: 28px;
    width: 28px;
    background: ${(props) => props.theme.palette.paper};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 4px;

    svg {
      fill: ${(props) => props.theme.palette.secondary};
      height: 20px;
      width: 20px;
    }
  }

  .message {
    display: block;
    font-size: 1.1em;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .date {
    font-size: 0.9em;
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;
