import styled from 'styled-components';
import { Paper } from '../../components/ui';

export const AuthBox = styled(Paper)`
  width: 100%;
  max-width: 400px;
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

export const Features = styled.ul`
  color: ${(props) => props.theme.palette.text.primary};
  margin-top: 8px;
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
`;
