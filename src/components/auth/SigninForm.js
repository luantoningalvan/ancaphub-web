import React, { useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Input from '../form/Input';
import { authUserRequest } from '../../actions/auth';

import {
  Button
} from '../ui'

export default () => {
  const dispatch = useDispatch();
  const signupFormRef = useRef(null);
  const { formatMessage } = useIntl();
  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email(formatMessage({ id: 'account.settings.validation.emailInvalid' }))
          .required(formatMessage({ id: 'account.settings.validation.emailRequired' })),
        password: Yup.string().required({ id: 'account.settings.validation.passwordRequired' }),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(authUserRequest(data));
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
      </div>
    </Form>
  );
};
