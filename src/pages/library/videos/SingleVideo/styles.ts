import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  .videoPlayer {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.7);
  }
`;

export const Banner = styled.div`
  background: ${(props) => props.theme.palette.paperDark};
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const Title = styled.h2`
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.secondary};
  margin-top: 1em;
`;

export const Author = styled.h3`
  font-weight: lighter;
  color: ${(props) => props.theme.palette.text.secondary};
`;

export const VideoContentContainer = styled.div`
  padding: 1em 1em 1em 0;
  max-width: 1024px;
  margin: auto;
  margin-bottom: 1em;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 1em;
  }
`;
