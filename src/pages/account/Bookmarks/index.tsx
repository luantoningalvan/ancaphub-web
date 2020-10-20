import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Hero } from 'snake-ui';

const Bookmarks = () => (
  <Container>
    <Hero
      title={
        <FormattedMessage
          id="account.bookmarks.savedItemsHeading"
          description="Título da página de salvos"
        />
      }
      actions
    />
  </Container>
);

export default Bookmarks;
