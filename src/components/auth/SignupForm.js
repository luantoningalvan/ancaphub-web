import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormattedMessage, useIntl } from 'react-intl';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Input from '../form/Input';
import { createUserRequest } from '../../actions/users';

import { Button } from '../ui';

const SignupForm = () => {
  const dispatch = useDispatch();
  const signupFormRef = useRef(null);
  const { formatMessage } = useIntl();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(
            3,
            formatMessage({ id: 'account.settings.validation.usernameShort' })
          )
          .max(
            30,
            formatMessage({ id: 'account.settings.validation.usernameLong' })
          )
          .required(
            formatMessage({
              id: 'account.settings.validation.usernameRequired',
            })
          ),
        username: Yup.string()
          .min(
            3,
            formatMessage({ id: 'account.settings.validation.usernameShort' })
          )
          .max(
            20,
            formatMessage({ id: 'account.settings.validation.usernameLong' })
          )
          .matches(
            /^[a-zA-Z0-9_]+$/,
            formatMessage({ id: 'account.settings.validation.regex' })
          )
          .required(
            formatMessage({
              id: 'account.settings.validation.usernameRequired',
            })
          ),
        email: Yup.string()
          .email(
            formatMessage({ id: 'account.settings.validation.emailInvalid' })
          )
          .required(
            formatMessage({ id: 'account.settings.validation.emailRequired' })
          ),
        password: Yup.string()
          .required(
            formatMessage({
              id: 'account.settings.validation.currentPasswordRequired',
            })
          )
          .min(
            6,
            formatMessage({
              id: 'account.settings.validation.minPasswordLength',
            })
          ),
        confirmPassword: Yup.string()
          .required(
            formatMessage({
              id: 'account.settings.validation.confirmPasswordRequired',
            })
          )
          .oneOf(
            [Yup.ref('password'), null],
            formatMessage({
              id: 'account.settings.validation.passwordMismatch',
            })
          ),
        code: Yup.string()
          .required(formatMessage({ id: 'alpha.validation.inviteRequired' }))
          .length(20, formatMessage({ id: 'alpha.validation.inviteLength' })),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(createUserRequest(data));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        signupFormRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit} ref={signupFormRef}>
      <div spacing={1}>
        <div className="form-row">
          <FormattedMessage id="common.name">
            {(msg) => (
              <Input
                type="text"
                placeholder={msg}
                name="name"
                autoComplete="full-name"
              />
            )}
          </FormattedMessage>
        </div>

        <div className="form-row">
          <FormattedMessage id="common.username">
            {(msg) => (
              <Input
                type="text"
                placeholder={msg}
                name="username"
                autoComplete="username"
              />
            )}
          </FormattedMessage>
        </div>

        <div className="form-row">
          <FormattedMessage id="common.email">
            {(msg) => (
              <Input
                type="email"
                placeholder={msg}
                name="email"
                autoComplete="email"
              />
            )}
          </FormattedMessage>
        </div>
        <div className="form-row">
          <FormattedMessage id="common.password">
            {(msg) => (
              <Input
                type="password"
                placeholder={msg}
                name="password"
                autoComplete="new-password"
              />
            )}
          </FormattedMessage>

          <FormattedMessage id="components.auth.signUp.confirmPassword">
            {(msg) => (
              <Input
                type="password"
                placeholder={msg}
                name="confirmPassword"
                autoComplete="confirm-password"
              />
            )}
          </FormattedMessage>
        </div>

        <div className="form-row">
          <FormattedMessage id="components.auth.signUp.code">
            {(msg) => <Input type="text" placeholder={msg} name="code" />}
          </FormattedMessage>
        </div>
        <div className="form-row">
          <Button type="submit" color="secondary" style={{ width: '100%' }}>
            <FormattedMessage id="common.register" />
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default SignupForm;
