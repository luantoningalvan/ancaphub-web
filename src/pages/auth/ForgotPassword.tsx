import React, { useState } from 'react';
import { Form } from '@unform/web';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TextField } from '../../components/ui';
import {
  Button,
  Container,
  Card,
  CardBody,
  CardHeader,
  CircularLoader,
} from 'snake-ui';
import Provider from '../../components/template/Provider';
import api from '../../api/axios';
import { ReactComponent as AncapHubLogo } from '../../assets/ancaphub.svg';

const ForgotPassword = () => {
  const [sended, setSended] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ identifier }: { identifier: string }) => {
    try {
      setLoading(true);
      await api.post('/password/forgot', { email: identifier });
      setLoading(false);
      setSended(true);
    } catch (err) {}
  };

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
            <CardHeader title="Recuperar Senha" />
            <CardBody>
              {!loading ? (
                <>
                  {!sended ? (
                    <>
                      <p style={{ textAlign: 'center', marginBottom: 16 }}>
                        Digite seu endereço de email ou nome de usuário para que
                        possamos lhe enviar o e-mail com o link de recuperação
                      </p>
                      <Form onSubmit={handleSubmit}>
                        <TextField
                          icon={FiUser}
                          name="identifier"
                          placeholder="E-mail ou nome de usuário"
                        />
                        <Button
                          fullWidth
                          color="secondary"
                          type="submit"
                          style={{ marginTop: 16 }}
                        >
                          Enviar e-mail
                        </Button>
                      </Form>
                    </>
                  ) : (
                    <p>
                      Enviamos um e-mail de recuperação para sua conta.
                      Certifique-se de aguardar alguns minutos e verificar a
                      caixa de spam. Caso ele não chegue talvez você tenha
                      digitado os dados incorretos.
                    </p>
                  )}
                </>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularLoader size={72} />
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
