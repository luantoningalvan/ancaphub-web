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

export const ProjectSocialMedia = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 8px 0px;
  }
  ul li {
    padding: 8px 16px;
  }
  ul li a {
    color: ${(props) => props.theme.palette.text.primary};
  }
  ul li svg {
    float: left;
    fill: ${(props) => props.theme.palette.text.primary};
    margin-right: 8px;
  }
`;
