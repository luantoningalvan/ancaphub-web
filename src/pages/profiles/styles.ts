import styled, { css } from 'styled-components';

export const ProfileHeader = styled.div`
  width: 100%;
  background: ${(props) => props.theme.palette.paper};
  border-radius: 10px;
  margin-top: 15px;
  overflow: hidden;
  position: relative;

  .profile-cover {
    width: 100%;
    height: 120px;
    overflow: hidden;

    .edit-profile-cover {
      position: absolute;
      top: 16px;
      right: 16px;
      height: 40px;
      width: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      display: none;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }

    &:hover {
      .edit-profile-cover {
        display: flex;
      }
    }
  }

  @media (min-width: 768px) {
    .profile-cover {
      height: 200px;
    }
  }
`;

export const ProfilePicture = styled.div<{ isOwn?: boolean }>`
  margin-top: -100px;
  display: flex;
  justify-content: center;

  .avatar {
    position: relative;
    height: 128px;
    width: 128px;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;

    img {
      height: 100%;
      width: 100%;
    }

    ${(props) =>
      props.isOwn &&
      css`
        &:before {
          content: '';
          transition: all 0.3s;
        }

        .edit-profile-picture {
          display: none;
          position: absolute;
          height: 64px;
          width: 64px;
          top: 32px;
          left: 32px;
          align-items: center;
          justify-content: center;

          svg {
            color: ${props.theme.palette.text.contrast};
            height: 32px;
            width: 32px;
          }
        }

        &:hover {
          .edit-profile-picture {
            display: flex;
          }

          &:before {
            content: '';
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            position: absolute;
          }
        }
      `}
  }
`;

export const ProfileInfo = styled.div`
  display: grid;
  grid-template-areas: 'userName' 'followerCount' 'userActions';
  padding: 32px;

  .follower-count,
  .user-name,
  .user-action-buttons {
    flex: 1;
    display: flex;
  }

  .follower-count {
    justify-content: center;
    grid-area: followerCount;
    margin: 16px 0px;

    > ul {
      margin: 0;
      padding: 0;
      display: flex;

      > li {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        font-size: 0.75rem;
        text-transform: uppercase;
        padding-right: 24px;

        &::after {
          content: '';
          display: block;
          width: 1px;
          height: 20px;
          background-color: ${(props) => props.theme.palette.border};
          position: absolute;
          top: 8px;
          right: 0;
        }

        &:last-child {
          &::after {
            display: none;
          }
        }

        > span {
          color: ${(props) => props.theme.palette.text.secondary};
        }
        > .counter {
          text-decoration: none;
          font-weight: bold;
          font-size: 1.375rem;
          color: ${(props) => props.theme.palette.text.primary};
          margin-bottom: 8px;
        }

        & + li {
          padding-left: 24px;
        }
        &:last-child {
          padding-right: 0px;
        }
      }
    }
  }

  .user-name {
    grid-area: userName;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    > h3 {
      font-size: 1.6em;
      margin-bottom: 5px;
      color: ${(props) => props.theme.palette.text.primary};
    }
    > span {
      font-size: 0.9rem;
      color: ${(props) => props.theme.palette.text.secondary};
    }
  }

  .user-action-buttons {
    grid-area: userActions;
    justify-content: center;

    button {
      width: 100%;
      flex: 1;
      margin-right: 16px;
    }

    button:last-child {
      margin: 0px;
    }
  }

  @media (min-width: 768px) {
    grid-template-areas: 'followerCount userName userActions';
    grid-template-columns: repeat(3, 1fr);

    .follower-count {
      justify-content: flex-start;
      margin: 0px;
    }

    .user-action-buttons {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      button {
        width: inherit;
        flex: none;
      }
    }
  }
`;

export const UserAbout = styled.div`
  margin-bottom: 16px;

  > div {
    padding: 16px;
  }

  h3 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
    padding: 8px;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      flex-grow: 1;
      flex-shrink: 0;

      span {
        flex: 1;
        font-size: 1rem;
      }

      a {
        color: ${(props) => props.theme.palette.text.primary};
        font-size: 1rem;
      }

      svg {
        float: left;
        height: 20px;
        width: 20px;
        color: ${(props) => props.theme.palette.text.primary};
        margin-right: 8px;
      }

      & + li {
        margin-top: 16px;
      }
    }
  }
`;

export const ProfileContent = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;

  .profile-menu {
    grid-area: profileMenu;
    margin-bottom: 16px;
  }
`;
