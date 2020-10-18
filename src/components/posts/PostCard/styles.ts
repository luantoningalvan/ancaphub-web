import styled from 'styled-components';
import { Paper } from '../../ui';

export const PostContent = styled.p`
  word-wrap: normal;
  word-break: keep-all;
  text-align: justify;
`;

export const PostContentWrapper = styled.div`
  .DraftEditor-root {
    max-width: 640px;
    /* Faz com que as palavras quebrem junto com a linha */
    text-align: justify;
    word-wrap: normal;
    word-break: keep-all;
    & > * {
      .draftJsLinkifyPlugin__link__2ittM,
      .draftJsLinkifyPlugin__link__2ittM:visited {
        color: ${(props) => props.theme.palette.secondary};
        text-decoration: none;
      }
      .draftJsLinkifyPlugin__link__2ittM:hover,
      .draftJsLinkifyPlugin__link__2ittM:focus {
        color: ${(props) => props.theme.palette.secondary};
        outline: 0; /* reset for :focus */
        cursor: pointer;
      }
      .draftJsLinkifyPlugin__link__2ittM:active {
        color: ${(props) => props.theme.palette.secondary};
      }
      .draftJsHashtagPlugin__hashtag__1wMVC {
        color: ${(props) => props.theme.palette.secondary};
      }
    }
  }
`;

export const PostContainer = styled(Paper)`
  margin-bottom: 16px;
  flex-basis: 100%;
  word-break: break-all;

  .profile-picture {
    height: 44px;
    width: 44px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 10px;
    > img {
      width: 100%;
    }
  }

  .post-header {
    display: flex;
    padding: 20px 20px 0px;
    align-items: center;

    a {
      display: block;
      text-decoration: none;
      font-weight: bold;
      color: ${(props) => props.theme.palette.text.primary};
      line-height: 100%;
      font-size: 1rem;
      margin-bottom: 5px;
    }

    span {
      display: block;
      color: ${(props) => props.theme.palette.text.secondary};
      line-height: 100%;
      font-size: 0.8rem;
    }
  }

  .post-actions {
    display: flex;
    border-top: 1px solid ${(props) => props.theme.palette.border};
    background: ${(props) => props.theme.palette.paperDark};

    div {
      align-items: center;
      display: flex;
      flex: 1 0 0px;
      justify-content: center;
    }

    button {
      margin: 8px;
      padding: 8px;
      border: none;
      outline: none;
      display: block;
      border-radius: 4px;
      background: transparent;
      cursor: pointer;
      color: ${(props) => props.theme.palette.text.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      width: 100%;

      > span {
        font-size: 1.1em;
      }

      svg {
        font-size: 20px;
        margin-right: 8px;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    .pressed {
      color: ${(props) => props.theme.palette.secondary};
    }
  }

  .post-counts {
    color: ${(props) => props.theme.palette.text.secondary};
    margin-top: 16px;

    span {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
