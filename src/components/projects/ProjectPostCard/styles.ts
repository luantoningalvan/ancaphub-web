import styled from 'styled-components';

export const Post = styled.div`
  display: flex;
  height: 150px;
  margin-bottom: 16px;
  border-radius: 8px;
  padding: 16px;
  background: ${(props) => props.theme.palette.paper};

  .post-cover {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 40%;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post-content {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 60%;
    padding: 16px;

    .date {
      display: flex;
      margin-bottom: 8px;
      align-items: center;
      color: ${(props) => props.theme.palette.text.secondary};
      font-size: 0.8em;
      svg {
        height: 20px;
        width: 20px;
        margin-right: 8px;
      }
    }

    a h3 {
      color: ${(props) => props.theme.palette.text.primary};
      font-size: 1.4em;
    }

    p {
      margin-top: 8px;
    }
  }
`;
