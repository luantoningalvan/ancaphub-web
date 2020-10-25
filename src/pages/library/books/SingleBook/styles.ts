import styled from 'styled-components';
import defaultThumbnail from '../../../../assets/default-book-cover.jpg';

export const Title = styled.h2`
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.contrast};
  font-size: 2.125rem;
  margin-bottom: 5px;
`;

export const Author = styled.h3`
  font-weight: lighter;
  color: ${(props) => props.theme.palette.text.contrast};
  font-size: 1.25rem;
  margin-bottom: 34px;
`;

export const BookCover = styled.img`
  width: 100%;
  @media only screen and (max-width: 768px) {
    height: 240px;
    object-fit: cover;
  }
`;

export const Banner = styled.div<{ cover?: string }>`
  background: url(${(props) => (props.cover ? props.cover : defaultThumbnail)})
    rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  width: 100%;
  height: 230px;

  &:after {
    height: 230px;
    width: 100%;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
  }
`;

export const BookDisplayContainer = styled.div`
  position: absolute;
  margin-top: -137px;
  margin-bottom: 1em;
  width: inherit;
`;

export const BookDisplayGrid = styled.div`
  display: grid;
  grid-template-columns: 33.3333% auto;
  grid-template-rows: auto;
  gap: 1.4em;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
