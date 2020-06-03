import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Hero } from '../../components/ui';

const Bookmarks = () => (
  <Container>
    <Hero
      title={
        <FormattedMessage
          id="account.bookmarks.savedItemsHeading"
          description="Título da página de salvos"
        />
      }
    />
  </Container>
);

export default Bookmarks;
