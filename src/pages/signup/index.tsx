import React, { useRef, useState } from "react";

import ThemeProvider from "../../components/template/Provider";
import { Button, Card, Container, Grid } from "snake-ui";
import { FiCalendar } from "react-icons/fi";
import styled from "styled-components";
import TextField from "../../components/form/TextField";
import { FormattedMessage } from "react-intl";
import { Form } from "@unform/web";
import Header from "components/template/Header";

const EmailForm = styled(Card)`
  padding: 24px;
  text-align: center;
  margin-top: 32px;

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;
const Home = () => {
  const formRef = useRef(null);
  return (
    <ThemeProvider>
      <Header />
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          style={{ margin: "32px 0" }}
        >
          <Grid item xs={12} md={4} lg={4}>
            <FiCalendar size={250} />
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <h2 style={{ fontSize: 48 }}>
              <FormattedMessage id="container.signup.subtitle" />
            </h2>
            <p style={{ fontSize: 14, marginTop: 8 }}>
              <FormattedMessage id="container.signup.paragraph" />
            </p>

            <EmailForm>
              <h3>
                <FormattedMessage id="container.signup.notifyMe" />
              </h3>
              {/*@ts-ignore*/}
              <Form onSubmit={() => formRef.current.submit()}>
                <form
                  action="https://ancaphub.us4.list-manage.com/subscribe/post?u=8dcaecd3f32f00a2fc4a31b2d&amp;id=f8b522476f"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  ref={formRef}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormattedMessage id="common.name">
                        {(message) => (
                          <TextField
                            name="FULLNAME"
                            placeholder={String(message)}
                            required
                          />
                        )}
                      </FormattedMessage>
                    </Grid>
                    <Grid item xs={12}>
                      <FormattedMessage id="common.email">
                        {(message) => (
                          <TextField
                            name="EMAIL"
                            placeholder={String(message)}
                            type="email"
                            required
                          />
                        )}
                      </FormattedMessage>
                    </Grid>

                    <Grid item xs={12}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>
                          <input type="checkbox" required id="checkbox" />
                          <label htmlFor="checkbox" style={{ marginLeft: 8 }}>
                            <FormattedMessage id="container.signup.allowEmails" />
                          </label>
                        </span>
                        <Button color="secondary">
                          <FormattedMessage id="container.signup.done" />
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </Form>
            </EmailForm>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
