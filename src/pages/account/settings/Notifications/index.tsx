import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Card, CardBody } from 'snake-ui';

const Notifications = () => (
  <Card>
    <CardBody>
      <FormattedMessage
        id="account.settings.noneAvailable"
        values={{ what: <FormattedMessage id="common.notifications" /> }}
      />
    </CardBody>
  </Card>
);
export default Notifications;
