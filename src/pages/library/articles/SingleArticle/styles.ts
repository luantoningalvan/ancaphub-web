import styled from 'styled-components';
import defaultThumbnail from '../../../../assets/default-book-cover.jpg';

export const Banner = styled.div<{ cover?: string }>`
  background: url(${(props) => (props.cover ? props.cover : defaultThumbnail)})
    rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: center;
  width: 100%;
  background-blend-mode: overlay;
  height: 300px;
  text-align: center;

  .snake-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.contrast};
  font-size: 2.125rem;
  margin-bottom: 5px;
`;

export const Author = styled.h3`
  a {
    font-weight: lighter;
    color: ${(props) => props.theme.palette.text.contrast};
    font-size: 1.25rem;
  }
`;

export const TextControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
`;

export const TextControlButton = styled.span`
  cursor: pointer;
`;
