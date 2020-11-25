import styled from 'styled-components';

export const Contribute = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;

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
        border: none;
        cursor: pointer;
        color: ${(props) => props.theme.palette.text.primary};

        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        h4 {
          font-weight: normal;
          margin-top: 16px;
          font-size: 1rem;
        }

        svg {
          height: 64px;
          width: 64px;
          stroke-width: 0.75px;
        }
      }
    }
  }
`;
