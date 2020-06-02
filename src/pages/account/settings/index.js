import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  Container,
  Paper,
  Hero,
  Menu,
  MenuItem,
} from '../../../components/ui'

import AccountIcon from 'react-ionicons/lib/IosPerson';
import NotificationsIcon from 'react-ionicons/lib/IosNotifications';
import PrivacyIcon from 'react-ionicons/lib/IosLock';

import { useLocation } from 'react-router-dom';

import Notifications from './Notifications';
import Privacy from './Privacy';
import AccessAndSecurity from './AccessAndSecurity';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default () => {
  const query = useQuery().get('tab');

  const settigsMap = {
    notifications: <Notifications />,
    privacy: <Privacy />,
    access_and_security: <AccessAndSecurity />,
  };

  // eslint-disable-next-line no-nested-ternary
  const Tab = () => (query !== null ? (settigsMap[query] === undefined ? <AccessAndSecurity /> : settigsMap[query]) : <AccessAndSecurity />);

  return (
    <Container>
      <Hero
        title={(
          <FormattedMessage
            id="common.settings"
            description="Título da página de configurações"
          />
        )}
      />
      <div style={{ marginTop: 16 }}>
        <div style={{display: 'grid', gridTemplateColumns: '3fr 9fr', gap: 16}}>
          <div>
            <Paper>
              <Menu>
                <MenuItem
                  current={query === 'access_and_security' || query === null || settigsMap[query] === undefined}
                  label={<FormattedMessage id="common.account" />}
                  link="/settings?tab=access_and_security"
                  icon={<AccountIcon />}
                />
                <MenuItem
                  current={query === 'notifications'}
                  label={<FormattedMessage id="common.notifications" />}
                  link="/settings?tab=notifications"
                  icon={<NotificationsIcon />}
                />
                <MenuItem
                  current={query === 'privacy'}
                  label={<FormattedMessage id="common.privacy" />}
                  link="/settings?tab=privacy"
                  icon={<PrivacyIcon />}
                />
              </Menu>
            </Paper>
            </div>
            <div>
              <Tab />
            </div>
        </div>
      </div>
    </Container>
  );
};
