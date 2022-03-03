import React from "react";
import { FormattedMessage } from "react-intl";
import GroupCard from "../../components/groups/GroupCard";

import { Container, Hero, Button, Grid } from "snake-ui";
import ComingSoon from "../../components/alerts/ComingSoon";

const groups = [
  {
    name: "Grupo 1",
    cover: "",
    membersCounts: 200,
    hasEnrolled: false,
    id: "1",
  },
  {
    name: "Grupo 2",
    cover: "",
    membersCounts: 300,
    hasEnrolled: false,
    id: "2",
  },
  {
    name: "Grupo 3",
    cover: "",
    membersCounts: 400,
    hasEnrolled: false,
    id: "3",
  },
  {
    name: "Grupo 4",
    cover: "",
    membersCounts: 500,
    hasEnrolled: false,
    id: "4",
  },
];

const Groups = () => {
  return (
    <Container>
      <Hero
        title={
          <FormattedMessage
            id="common.groups"
            description="Título da página de grupos"
          />
        }
        description={
          <FormattedMessage
            id="home.features.1"
            description="Descrição da página de grupos"
          />
        }
        actions={
          <Button variant="outlined" color="primary">
            <FormattedMessage id="groups.create" />
          </Button>
        }
      />
      <h3 style={{ margin: "20px 0px 10px" }}>
        <FormattedMessage id="groups.explore" />
      </h3>

      <Grid container spacing={2}>
        {groups.map((group) => (
          <Grid item xs={12} md={6} lg={4} key={group.id}>
            <GroupCard data={group} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Groups;
