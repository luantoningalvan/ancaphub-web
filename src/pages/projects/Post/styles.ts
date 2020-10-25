import styled from 'styled-components';

export const PostContainer = styled.div`
  margin: auto;
  border-radius: 8px;
  max-width: 650px;
  width: 100%;
  background: ${(props) => props.theme.palette.paper};
  margin-top: 32px;
  position: relative;

  .thumbnail {
    height: 250px;
    overflow: hidden;
    border-radius: 8px 8px 0px 0px;
    position: relative;

    img {
      width: 100%;
    }
  }

  .content {
    h2 {
      font-size: 2em;
      margin-bottom: 8px;
    }
    padding: 16px;
  }

  .project-avatar {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 218px;
    right: 16px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

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
`;
