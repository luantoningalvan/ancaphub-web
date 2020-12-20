import React, { useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { TextField } from '../../../../components';
import { Button, Card, CardBody, CardHeader, Accordion, Grid } from 'snake-ui';

import {
  updateEmailRequest,
  updateUsernameRequest,
  updatePasswordRequest,
} from '../../../../redux/actions/settings';

const AccessAndSecurity = () => {
  const { formatMessage } = useIntl();
  const emailFormRef = useRef<any>(null);
  const usernameFormRef = useRef<any>(null);
  const passwordFormRef = useRef<any>(null);
  const dispatch = useDispatch();
  const currentData = useSelector((state: any) => state.auth.user);

  const handleUsernameSubmit = async (data: any) => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string()
          .min(3, formatMessage({ id: 'settings.validation.usernameShort' }))
          .max(20, formatMessage({ id: 'settings.validation.usernameLong' }))
          .matches(
            /^[a-zA-Z0-9_]+$/,
            formatMessage({ id: 'settings.validation.regex' })
          )
          .required(
            formatMessage({ id: 'settings.validation.usernameRequired' })
          ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(updateUsernameRequest(data));
    } catch (err) {
      const validationErrors: { [key: string]: any } = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        usernameFormRef.current.setErrors(validationErrors);
      }
    }
  };

  const handleEmailSubmit = async (data: any) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email(formatMessage({ id: 'settings.validation.emailInvalid' }))
          .required(formatMessage({ id: 'settings.validation.emailRequired' })),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(updateEmailRequest(data));
    } catch (err) {
      const validationErrors: { [key: string]: any } = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        emailFormRef.current.setErrors(validationErrors);
      }
    }
  };

  const handlePasswordSubmit = async (data: any) => {
    try {
      const schema = Yup.object().shape({
        current_password: Yup.string().required(
          formatMessage({ id: 'settings.validation.currentPasswordRequired' })
        ),
        new_password: Yup.string()
          .required(
            formatMessage({ id: 'settings.validation.currentPasswordRequired' })
          )
          .min(
            6,
            formatMessage({ id: 'settings.validation.minPasswordLength' })
          ),
        confirm_new_password: Yup.string()
          .required(
            formatMessage({ id: 'settings.validation.confirmPasswordRequired' })
          )
          .oneOf(
            [Yup.ref('new_password')],
            formatMessage({ id: 'settings.validation.passwordMismatch' })
          ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(updatePasswordRequest(data));
    } catch (err) {
      const validationErrors: { [key: string]: any } = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        passwordFormRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <Card>
      <CardHeader
        title={<FormattedMessage id="account.settings.accessAndSecurity" />}
      />

      <CardBody>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Accordion title={<FormattedMessage id="common.username" />}>
              <Form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
                onSubmit={handleUsernameSubmit}
                ref={usernameFormRef}
                initialData={{ username: currentData.username }}
              >
                <FormattedMessage id="account.settings.insertNewUsername">
                  {(msg) => (
                    <TextField
                      fullWidth
                      placeholder={msg}
                      name="username"
                      type="text"
                    />
                  )}
                </FormattedMessage>
                <Button
                  type="submit"
                  color="secondary"
                  style={{ marginTop: 16 }}
                >
                  <FormattedMessage id="common.change" />
                </Button>
              </Form>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion title={<FormattedMessage id="common.email" />}>
              <Form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
                onSubmit={handleEmailSubmit}
                ref={emailFormRef}
                initialData={{ email: currentData.email }}
              >
                <FormattedMessage id="account.settings.insertNewEmail">
                  {(msg) => (
                    <TextField
                      fullWidth
                      placeholder={msg}
                      name="email"
                      type="email"
                    />
                  )}
                </FormattedMessage>
                <Button
                  type="submit"
                  color="secondary"
                  style={{ marginTop: 16 }}
                >
                  <FormattedMessage id="common.change" />
                </Button>
              </Form>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion title={<FormattedMessage id="common.password" />}>
              <Form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
                onSubmit={handlePasswordSubmit}
                ref={passwordFormRef}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormattedMessage id="account.settings.typeCurrentPassword">
                      {(msg) => (
                        <TextField
                          placeholder={msg}
                          name="current_password"
                          type="password"
                          style={{ marginTop: 8 }}
                        />
                      )}
                    </FormattedMessage>
                  </Grid>
                  <Grid item xs={12}>
                    <FormattedMessage id="common.password">
                      {(msg: string) => (
                        <FormattedMessage
                          id="common.newFemale"
                          values={{ what: msg.toLowerCase() }}
                        >
                          {(_msg) => (
                            <TextField
                              placeholder={_msg}
                              name="new_password"
                              type="password"
                            />
                          )}
                        </FormattedMessage>
                      )}
                    </FormattedMessage>
                  </Grid>
                  <Grid item xs={12}>
                    <FormattedMessage id="account.settings.confirmNewPassword">
                      {(msg) => (
                        <TextField
                          placeholder={msg}
                          name="confirm_new_password"
                          type="password"
                          style={{ marginTop: 8 }}
                        />
                      )}
                    </FormattedMessage>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="secondary"
                    style={{ marginTop: 16 }}
                  >
                    <FormattedMessage id="common.change" />
                  </Button>
                </Grid>
              </Form>
            </Accordion>
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default AccessAndSecurity;
