import styled from 'styled-components';

export const EditAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.palette.paper};
  padding: 16px;
  width: 200px;
  border-radius: 8px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 8px;
  }

  .buttons {
    width: 100%;

    button {
      margin-top: 8px;
    }
  }
`;

export const EditCoverContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0, 0.2);
  position: relative;

  .cover-buttons {
    position: absolute;
    bottom: 8px;
    right: 8px;
    display: flex;

    button + button {
      margin-left: 8px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;
