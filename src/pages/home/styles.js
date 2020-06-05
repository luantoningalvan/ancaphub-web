import styled from 'styled-components';
import { Paper } from '../../components/ui';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;

    .logo {
      text-align: left;
    }
  }
`;

export const Presentation = styled.div`
  .logo {
    text-align: center;
    margin: 32px 0px;
  }

  ul {
    color: ${(props) => props.theme.palette.text.primary};
    margin: 16px 0px;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-bottom: 8px;
      font-weight: lighter;
    }
    li > svg {
      height: 32px;
      width: 32px;
      fill: ${(props) => props.theme.palette.text.primary};
      margin-right: 8px;
    }
  }

  @media (min-width: 768px) {
    margin-right: 32px;

    .logo {
      text-align: left;
    }
  }
`;

export const AuthBox = styled(Paper)`
  width: 100%;
  max-width: 400px;
  margin: 16px 0px;
  padding: 16px;

  form {
    display: flex;
    flex-direction: column;

    .form-row {
      margin-top: 8px;
      display: flex;

      input + input {
        margin-left: 8px;
      }
    }
  }

  .switch-form {
    color: ${(props) => props.theme.palette.text.primary};
    text-align: center;
    display: block;
    margin-top: 16px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
