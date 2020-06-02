import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  Container,
  Hero,
} from '../../components/ui'

export default () => (
  <Container>
    <Hero
      title={(
        <FormattedMessage
          id="account.bookmarks.savedItemsHeading"
          description="Título da página de salvos"
        />
        )}
    />
  </Container>
);
