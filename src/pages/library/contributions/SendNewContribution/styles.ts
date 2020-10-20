import styled from 'styled-components';

export const UploadBox = styled.div`
  height: 100px;
  width: 100%;
  border-radius: 8px;
  border: 1px dashed ${(props) => props.theme.palette.text.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    fill: ${(props) => props.theme.palette.text.secondary};
    height: 40px;
    width: 40px;
    margin-bottom: 16px;
  }
`;

export const Contribute = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;

  h3 {
    font-size: 1.5em;
    color: ${(props) => props.theme.palette.text.primary};
    margin-bottom: 32px;
  }

  ul {
    display: flex;

    li {
      list-style: none;
      border: 1px solid ${(props) => props.theme.palette.border};
      margin: 16px;
      border-radius: 8px;
      overflow: hidden;
      button {
        padding: 48px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background: transparent;
        color: ${(props) => props.theme.palette.text.secondary};
        border: none;
        cursor: pointer;

        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        h4 {
          font-weight: normal;
          margin-top: 8px;
        }

        svg {
          fill: ${(props) => props.theme.palette.text.primary};
          height: 64px;
          width: 64px;
        }
      }
    }
  }
`;
