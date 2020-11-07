import styled from 'styled-components';
import { types } from './';

export const LibraryCard = styled.div<{ type: string }>`
  width: 100%;

  .card-cover {
    width: 100%;
    border-radius: 8px;
    height: ${(props) => types[props.type].size}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    .card-buttons,
    .card-image {
      position: absolute;
      text-decoration: none;
    }

    .card-buttons {
      display: none;
    }

    .card-image {
      width: 100%;
      border-radius: 8px;
      height: ${(props) => types[props.type].size}px;
      overflow: hidden;
      transition: all 0.25s ease-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &:hover {
      .card-image {
        transform: scale(1.1);
      }
    }
  }

  .card-title {
    margin: 10px 0px 0px;
    padding: 0px;
    line-height: 1.25rem;
    font-size: 1.25rem;
    margin: 15px 0px 5px;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .card-author {
    font-weight: lighter;
    margin: 0;
    line-height: 0.9rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.palette.text.secondary};
  }

  .card-type {
    position: absolute;
    top: 8px;
    left: 8px;
    background: ${(props) => props.theme.palette.secondary};
    padding: 5px;
    border-radius: 5px;
    line-height: 100%;
    z-index: 10;
    color: ${(props) => props.theme.palette.text.contrast};
  }

  .link {
    color: ${(props) => props.theme.palette.text.primary};
    text-decoration: none;
  }
`;
