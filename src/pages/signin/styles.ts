import styled from 'styled-components';

export const HomeContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    min-height: 100vh;
    width: 100%;
    .logo {
      text-align: left;
    }
  }
`;

export const Presentation = styled.div`
  display: none;
  @media (min-width: 768px) {
    flex: 1;
    background: url('https://source.unsplash.com/collection/10626955/1600x900'),
      linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 212, 255, 0) 100%);
    background-position: center;
    background-blend-mode: overlay;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;

    ul {
      color: ${(props) => props.theme.palette.text.contrast};
      margin: 16px 0px;

      li {
        list-style: none;
        display: flex;
        align-items: center;
        font-size: 25px;
        font-weight: lighter;

        & + li {
          margin-top: 16px;
        }

        svg {
          height: 25px;
          width: 25px;
          margin-right: 16px;
        }
      }
    }

    .logo {
      text-align: left;
    }
  }
`;

export const AuthBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('https://source.unsplash.com/collection/10626955/1600x900'),
    rgba(0, 0, 0, 0.8);
  background-position: center;
  background-blend-mode: overlay;
  background-size: cover;

  .auth-content {
    width: 100%;
    max-width: 420px;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    text-align: center;
    margin-top: 16px;
    svg {
      fill: #e0b30d;
      width: 150px;
    }
  }

  .form {
    width: 100%;
    background: ${(props) => props.theme.palette.paper};
    padding: 16px;
    border-radius: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    .form-row {
      margin-top: 8px;
      display: flex;

      input + input {
        margin-left: 8px;
      }
    }
  }

  h3 {
    text-align: center;
    font-size: 26px;
    margin-bottom: 16px;
  }

  .switch-form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 32px 0px;

    button {
      color: ${(props) => props.theme.palette.text.primary};
      border: none;
      background: none;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 420px;
    padding: 0px 32px;
    background: ${(props) => props.theme.palette.paper};

    .auth-content {
      max-width: none;
      padding: 0px;
    }

    .switch-form {
      padding-top: 16px;
      border-top: 1px solid ${(props) => props.theme.palette.border};
    }
  }
`;
