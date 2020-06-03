import React from 'react';
import { FormattedMessage } from 'react-intl';

import AccountIcon from 'react-ionicons/lib/IosPerson';
import NotificationsIcon from 'react-ionicons/lib/IosNotifications';
import PrivacyIcon from 'react-ionicons/lib/IosLock';

import { useLocation } from 'react-router-dom';
import { Container, Paper, Hero, Menu, MenuItem } from '../../../components/ui';

import Notifications from './Notifications';
import Privacy from './Privacy';
import AccessAndSecurity from './AccessAndSecurity';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Settings = () => {
  const query = useQuery().get('tab');

  const settingsMap = {
    notifications: <Notifications />,
    privacy: <Privacy />,
    access_and_security: <AccessAndSecurity />,
  };

  const Tab = () =>
    // TODO: remove this nested ternary as it is very misleading
    // eslint-disable-next-line no-nested-ternary
    query !== null ? (
      settingsMap[query] === undefined ? (
        <AccessAndSecurity />
      ) : (
        settingsMap[query]
      )
    ) : (
      <AccessAndSecurity />
    );

  return (
    <Container>
      <Hero
        title={
          <FormattedMessage
            id="common.settings"
            description="Título da página de configurações"
          />
        }
      />
      <div style={{ marginTop: 16 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '3fr 9fr', gap: 16 }}
        >
          <div>
            <Paper>
              <Menu>
                <MenuItem
                  current={
                    query === 'access_and_security' ||
                    query === null ||
                    settingsMap[query] === undefined
                  }
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

export default Settings;
