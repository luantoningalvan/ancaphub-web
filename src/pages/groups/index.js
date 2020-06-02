import React from 'react';
import { FormattedMessage } from 'react-intl';
import GroupCard from '../../components/groups/GroupCard';

import {
  Container,
  Hero,
  Button,
} from '../../components/ui'

const groups = [
  {
    name: 'Grupo 1',
    cover: '',
    membersCounts: 200,
    hasEnrolled: false,
    _id: '1',
  },
  {
    name: 'Grupo 2',
    cover: '',
    membersCounts: 300,
    hasEnrolled: false,
    _id: '2',
  },
  {
    name: 'Grupo 3',
    cover: '',
    membersCounts: 400,
    hasEnrolled: false,
    _id: '3',
  },
  {
    name: 'Grupo 4',
    cover: '',
    membersCounts: 500,
    hasEnrolled: false,
    _id: '4',
  },
];

export default () => (
  <Container>
    <Hero
      title={(
        <FormattedMessage
          id="common.groups"
          description="Título da página de grupos"
        />
        )}
      description={(
        <FormattedMessage
          id="home.features.1"
          description="Descrição da página de grupos"
        />
        )}
      actions={(
        <Button variant="outlined" color="primary">
          <FormattedMessage id="groups.create" />
        </Button>
        )}
    />
    <h3 style={{ margin: '20px 0px 10px' }}>
      <FormattedMessage id="groups.explore" />
    </h3>

    <div spacing={2}>
      {groups.map((group) => (
        <div xs={12} md={6} lg={4}>
          <GroupCard data={group} />
        </div>
      ))}
    </div>
  </Container>
);
