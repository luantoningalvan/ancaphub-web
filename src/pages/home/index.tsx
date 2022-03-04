import React, { useEffect, useState } from "react";
import {
  FiUsers,
  FiUser,
  FiFolder,
  FiCalendar,
  FiCrosshair,
  FiZap,
  FiPlayCircle,
  FiPlus,
} from "react-icons/fi";
import ReactPlayer from "react-player";
import { FormattedMessage, useIntl } from "react-intl";
import { Button, Container, Grid } from "snake-ui";
import FeatureCard from "../../components/features/FeatureCard";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import ThemeProvider from "../../components/template/Provider";
import { CountDownContainer, TimerContainer, VideoLight } from "./styles";

import mises from "../../assets/slider/mises.jpg";

const Home = () => {
  const { formatMessage } = useIntl();

  return (
    <ThemeProvider>
      <Header transparent />
      <CountDownContainer bg={mises}>
        <div></div>
        <div style={{ fontSize: "5rem" }}>
          <h3>Em breve</h3>
        </div>
        <Button
          variant="outlined" //@ts-ignore
          color="white"
          style={{ width: 150, borderRadius: "32px" }}
          onClick={() =>
            document.getElementById("presentation")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Saber <FiPlus size={18} style={{ marginLeft: 8 }} />
        </Button>
      </CountDownContainer>
      <VideoLight id="presentation">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=RbvUggaIzLU"
          light
          style={{
            boxShadow: "0px 0px 20px rgba(0,0,0.6)",
          }}
          playIcon={
            <button>
              <FiPlayCircle size={66} />
            </button>
          }
        />
      </VideoLight>

      <Container>
        <hgroup style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 48 }}>
            <FormattedMessage id="common.features" />
          </h2>
          <h3
            style={{
              fontWeight: "lighter",
              fontSize: 18,
              margin: "16px 0px 24px 0px",
            }}
          >
            <FormattedMessage id="home.featuresConfirmed" />
          </h3>
        </hgroup>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <FormattedMessage id="home.features.6">
              {(message) => (
                <FeatureCard
                  title={formatMessage({ id: "common.location" })}
                  description={String(message)}
                  icon={<FiCrosshair />}
                  videoUrl="https://youtu.be/GUm0lQxjbio"
                  progress={90}
                />
              )}
            </FormattedMessage>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormattedMessage id="home.features.5">
              {(message) => (
                <FeatureCard
                  title={formatMessage({ id: "common.profile" })}
                  description={String(message)}
                  icon={<FiUser />}
                  videoUrl="https://youtu.be/ld4fLpniEp0"
                  progress={90}
                />
              )}
            </FormattedMessage>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormattedMessage id="home.features.0">
              {(message) => (
                <FeatureCard
                  title={formatMessage({ id: "common.library" })}
                  description={String(message)}
                  icon={<FiFolder />}
                  videoUrl="https://youtu.be/XIRUsskEitc"
                  progress={90}
                />
              )}
            </FormattedMessage>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormattedMessage id="home.features.1">
              {(message) => (
                <FeatureCard
                  title={formatMessage({ id: "common.groups" })}
                  description={String(message)}
                  icon={<FiUsers />}
                  videoUrl="https://youtu.be/dyNVxkDttg8"
                  progress={30}
                />
              )}
            </FormattedMessage>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormattedMessage id="home.features.3">
              {(message) => (
                <FeatureCard
                  title={formatMessage({ id: "common.events" })}
                  description={String(message)}
                  icon={<FiCalendar />}
                  videoUrl="https://youtu.be/GUm0lQxjbio"
                  progress={70}
                />
              )}
            </FormattedMessage>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormattedMessage id="home.features.4">
              {(message) => (
                <FeatureCard
                  title={formatMessage({ id: "common.projects" })}
                  description={String(message)}
                  icon={<FiZap />}
                  videoUrl="https://youtu.be/H3g7TvrsHjE"
                  progress={90}
                />
              )}
            </FormattedMessage>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
