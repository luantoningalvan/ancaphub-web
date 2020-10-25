import React, { useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TextField } from '../../';
import { Button } from 'snake-ui';
import { FormHandles } from '@unform/core';

import { authUserRequest } from '../../../actions/auth';

const SignInForm = () => {
  const dispatch = useDispatch();
  const signupFormRef = useRef<FormHandles | null>(null);
  const { formatMessage } = useIntl();
  async function handleSubmit(data: any) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email(
            formatMessage({ id: 'account.settings.validation.emailInvalid' })
          )
          .required(
            formatMessage({ id: 'account.settings.validation.emailRequired' })
          ),
        password: Yup.string().required(
          formatMessage({ id: 'account.settings.validation.passwordRequired' })
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(authUserRequest(data));
    } catch (err) {
      const validationErrors: any = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        signupFormRef?.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit} ref={signupFormRef}>
      <div>
        <div className="form-row">
          <FormattedMessage id="common.email">
            {(msg) => (
              <TextField
                icon={FiMail}
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
              <TextField
                icon={FiLock}
                type="password"
                placeholder={msg}
                name="password"
                autoComplete="password"
              />
            )}
          </FormattedMessage>
        </div>
        <div className="form-row">
          <Button type="submit" color="secondary" style={{ width: '100%' }}>
            <FormattedMessage id="common.login" description="Login button" />
          </Button>
        </div>

        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
        >
          <Link to="/auth/forgot" style={{ color: '#bbb' }}>
            <FormattedMessage id="common.forgotPassword" />
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default SignInForm;
