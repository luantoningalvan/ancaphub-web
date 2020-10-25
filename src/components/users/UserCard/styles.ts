import styled from 'styled-components';
import { Paper } from 'snake-ui';

export const UserCardWrap = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .avatar,
  .username,
  .distance {
    margin-bottom: 8px;
  }
  .username {
    color: ${(props) => props.theme.palette.text.secondary};
    font-size: 0.8em;
    line-height: 100%;
    margin-bottom: 16px;
  }

  a {
    display: block;
  }

  .distance {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    svg {
      color: ${(props) => props.theme.palette.secondary};
    }
  }
`;
