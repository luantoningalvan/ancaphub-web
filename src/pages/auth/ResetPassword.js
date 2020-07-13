import React, { useState, useRef } from 'react';
import { Form } from '@unform/web';
import { FiLock } from 'react-icons/fi';
import { useParams, Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

import * as Yup from 'yup';
import Input from '../../components/form/Input';
import {
  Button,
  Container,
  Card,
  CardBody,
  CardHeader,
  Spinner,
} from '../../components/ui';
import Provider from '../../components/template/Provider';
import api from '../../api/axios';
import { ReactComponent as AncapHubLogo } from '../../assets/ancaphub.svg';

const ForgotPassword = () => {
  const { user, token } = useParams();
  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const { formatMessage } = useIntl();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
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
        password_confirm: Yup.string()
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
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      setLoading(true);
      await api.post('/auth/recover-password-code', {
        token,
        user,
        password: data.password,
      });
      setLoading(false);
      setSended(true);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((yupError) => {
          validationErrors[yupError.path] = yupError.message;
        });
        formRef.current.setErrors(validationErrors);
        return;
      }

      setError('Não foi possível alterar a senha');
      setSended(true);
      setLoading(false);
    }
  }

  return (
    <Provider>
      <Container>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="/">
            <AncapHubLogo fill="#e0b30d" height={120} />
          </Link>
          <Card style={{ width: '100%', maxWidth: 400, marginTop: 32 }}>
            <CardHeader title="Resetar Senha" />
            <CardBody>
              {!loading ? (
                <>
                  {!sended ? (
                    <Form onSubmit={handleSubmit} ref={formRef}>
                      <FormattedMessage id="common.password">
                        {(msg) => (
                          <Input
                            type="password"
                            placeholder={msg}
                            icon={FiLock}
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
                            name="password_confirm"
                            icon={FiLock}
                            autoComplete="confirm-password"
                          />
                        )}
                      </FormattedMessage>
                      <Button
                        fullWidth
                        color="secondary"
                        type="submit"
                        style={{ marginTop: 16 }}
                      >
                        Alterar Senha
                      </Button>
                    </Form>
                  ) : (
                    <>
                      {error === null ? (
                        <p>
                          <strong>Senha alterada com sucesso!</strong>. Você já
                          pode <Link to="/">Fazer login</Link>
                        </p>
                      ) : (
                        <p>Erro! {error}</p>
                      )}
                    </>
                  )}
                </>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Spinner />
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </Container>
    </Provider>
  );
};

export default ForgotPassword;
