import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Card, CardBody } from 'snake-ui';

const Privacy = () => (
  <Card>
    <CardBody>
      <FormattedMessage
        id="account.settings.noneAvailable"
        values={{ what: <FormattedMessage id="common.privacy" /> }}
      />
    </CardBody>
  </Card>
);
export default Privacy;
