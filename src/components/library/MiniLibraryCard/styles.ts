import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MiniLIbraryCardSyle = styled(Link)<{ cover: string }>`
  display: flex;
  border-radius: 4px;
  background: ${(props) => props.theme.palette.paperDark};
  overflow: hidden;
  cursor: pointer;
  height: 95px;
  text-decoration: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1em;
    flex: 1;

    .title {
      font-weight: bold;
      font-size: 1.1em;
      max-height: 2.2em;
      margin-bottom: 5px;
      color: ${(props) => props.theme.palette.text.primary};
      overflow: hidden;
    }

    .author {
      font-weight: lighter;
      font-size: 14px;
      color: ${(props) => props.theme.palette.text.secondary};
    }
  }

  .cover {
    width: 70px;
    height: 95px;
    overflow: hidden;
    background-image: url(${(props) => props.cover});
    background-size: cover;
    background-position: center;
  }
`;
