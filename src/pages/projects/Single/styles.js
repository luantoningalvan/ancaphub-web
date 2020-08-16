import styled from 'styled-components';

export const ProjectBanner = styled.div`
  height: 200px;
  background: url("${(props) => props.cover}") rgba(0,0,0,.5);
  background-size: cover;
  background-blend-mode: overlay;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;

  h2 {
    color: ${(props) => props.theme.palette.text.contrast};
    font-size: 1.9em;
  }

  .icon{
    height:96px;
    width:96px;
    margin-right: 16px;
    border-radius:100%;
  }

  .category {
    color: ${(props) => props.theme.palette.text.contrast};
    background: ${(props) => props.theme.palette.secondary};
    font-size: 0.8em;
    font-weight: lighter;
    padding:4px;
    border-radius:4px;
  }
`;

export const About = styled.div`
  margin: 16px 0px;
  p {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.25em;
    text-rendering: optimizelegibility !important;
    letter-spacing: 0.03em;
  }

  img {
    margin-bottom: 16px;
    width: 100%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;
